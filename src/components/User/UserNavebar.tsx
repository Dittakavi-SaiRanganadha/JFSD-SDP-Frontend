import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import { IoCalculatorOutline } from 'react-icons/io5';
import { useAuth } from '../../context/AuthContext';


export default function UserNavebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">RealEstate</h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/user/buy" className="text-gray-700 hover:text-blue-600">Buy</Link>
            <Link to="/user/rent" className="text-gray-700 hover:text-blue-600">Rent</Link>
            {/* <Link to="/sell" className="text-gray-700 hover:text-blue-600">Sell</Link>*/}
            <Menu as="div" className="relative"> 
              <Menu.Button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <IoCalculatorOutline />
                <span>Calculators</span>
              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1">
                <Menu.Item>
                  <Link to="/calculators/emi" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    EMI Calculator
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/calculators/rent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Rent Calculator
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/calculators/construction" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Construction Cost
                  </Link>
                </Menu.Item>
                {/* <Menu.Item>
                  <Link to="/subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Subscription
                  </Link>
                </Menu.Item> */}
              </Menu.Items>
            </Menu>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  {user.role === 'admin' ? '👑 ' : ''}{user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <FiUser />
                <span>Login</span>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                className="p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FiMenu className="h-6 w-6" />
              </Menu.Button>

              {isOpen && (
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Menu.Item>
                    <Link to="/buy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Buy
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/rent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Rent
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/sell" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Sell
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/calculators/emi" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      EMI Calculator
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/calculators/rent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Rent Calculator
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/calculators/construction" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Construction Cost
                    </Link>
                  </Menu.Item>
                  {user ? (
                    <>
                      <Menu.Item>
                        <span className="block px-4 py-2 text-gray-700">
                          {user.role === 'admin' ? '👑 ' : ''}{user.name}
                        </span>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </Menu.Item>
                    </>
                  ) : (
                    <Menu.Item>
                      <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Login
                      </Link>
                    </Menu.Item>
                  )}
                </Menu.Items>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}