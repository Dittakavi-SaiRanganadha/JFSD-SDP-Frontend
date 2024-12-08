import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Sell from './pages/Sell';
import PropertyDetails from './pages/PropertyDetails';
import EMICalculator from './pages/calculators/EMICalculator';
import RentCalculator from './pages/calculators/RentCalculator';
import ConstructionCalculator from './pages/calculators/ConstructionCalculator';
import Registration from './pages/Registration';
// import { PropertyProvider } from './context/PropertyContext';
import SubscriptionPage from './pages/SubscriptionPage';
import HomeLoan from './pages/HomeLoan';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/calculators/emi" element={<EMICalculator />} />
          <Route path="/calculators/rent" element={<RentCalculator />} />
          <Route path="/calculators/construction" element={<ConstructionCalculator />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/HomeLoan" element={<HomeLoan/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;