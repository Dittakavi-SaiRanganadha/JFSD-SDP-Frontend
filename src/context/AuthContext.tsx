import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for the user session
    const storedUser = localStorage.getItem('authUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      // Save user to localStorage when logged in
      localStorage.setItem('authUser', JSON.stringify(user));
    } else {
      // Clear localStorage when logged out
      localStorage.removeItem('authUser');
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:2024/login', { email, password });

      if (response.status === 200) {
        const { password: _, ...userData } = response.data;
        setUser(userData as User);
      }
    } catch (err) {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null); // Clear the user state
    localStorage.removeItem('authUser'); // Remove user data from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
