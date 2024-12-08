// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Menu } from '@headlessui/react';
// import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
// import { IoCalculatorOutline } from 'react-icons/io5';
// import { useAuth } from '../../context/AuthContext';


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };
  

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0">
//               <h1 className="text-2xl font-bold text-blue-600">RealEstate</h1>
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/buy" className="text-gray-700 hover:text-blue-600">Buy</Link>
//             <Link to="/rent" className="text-gray-700 hover:text-blue-600">Rent</Link>
//             <Link to="/sell" className="text-gray-700 hover:text-blue-600">Sell</Link>
//             <Link to="/register" className="text-gray-700 hover:text-blue-600">Registration</Link>

//             <Menu as="div" className="relative">
//               <Menu.Button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//                 <IoCalculatorOutline />
//                 <span>Calculators</span>
//               </Menu.Button>
//               <Menu.Items className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1">
//                 <Menu.Item>
//                   <Link to="/calculators/emi" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     EMI Calculator
//                   </Link>
//                 </Menu.Item>
//                 <Menu.Item>
//                   <Link to="/calculators/rent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     Rent Calculator
//                   </Link>
//                 </Menu.Item>
//                 <Menu.Item>
//                   <Link to="/calculators/construction" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                     Construction Cost
//                   </Link>
//                 </Menu.Item>
//               </Menu.Items>
//             </Menu>

//             {user ? (
//               <div className="flex items-center space-x-4">
//                 {/* Circular Avatar with User's First Letter */}
//                 <div className="h-8 w-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
//                   {user.name.charAt(0).toUpperCase()}
//                 </div>
//                 {/* Logout Button */}
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
//                 >
//                   <FiLogOut />
//                   <span>Logout</span>
//                 </button>
//               </div>
//             ) : (
//               <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//                 <FiUser />
//                 <span>Login</span>
//               </Link>
//             )}
//           </div>

//           <div className="md:hidden flex items-center">
//             <Menu as="div" className="relative">
//               <Menu.Button
//                 className="p-2"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 <FiMenu className="h-6 w-6" />
//               </Menu.Button>

//               {isOpen && (
//                 <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
//                   <Menu.Item>
//                     <Link to="/buy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       Buy
//                     </Link>
//                   </Menu.Item>
//                   <Menu.Item>
//                     <Link to="/rent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       Rent
//                     </Link>
//                   </Menu.Item>
//                   <Menu.Item>
//                     <Link to="/sell" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       Sell
//                     </Link>
//                   </Menu.Item>
//                   <Menu.Item>
//                     <Link to="/calculators/emi" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       EMI Calculator
//                     </Link>
//                   </Menu.Item>
//                   <Menu.Item>
//                     <Link to="/calculators/rent" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       Rent Calculator
//                     </Link>
//                   </Menu.Item>
//                   <Menu.Item>
//                     <Link to="/calculators/construction" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                       Construction Cost
//                     </Link>
//                   </Menu.Item>
//                   {user ? (
//                     <>
//                       {/* Circular Avatar */}
//                       <Menu.Item>
//                         <div className="block px-4 py-2 flex items-center space-x-2">
//                           <div className="h-8 w-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
//                             {user.name.charAt(0).toUpperCase()}
//                           </div>
//                           <span className="text-gray-700">{user.name}</span>
//                         </div>
//                       </Menu.Item>
//                       <Menu.Item>
//                         <button
//                           onClick={handleLogout}
//                           className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                         >
//                           Logout
//                         </button>
//                       </Menu.Item>
//                     </>
//                   ) : (
//                     <Menu.Item>
//                       <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                         Login
//                       </Link>
//                     </Menu.Item>
//                   )}
//                 </Menu.Items>
//               )}
//             </Menu>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import { IoCalculatorOutline } from 'react-icons/io5';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <Link to="/buy" className="text-gray-700 hover:text-blue-600">Buy</Link>
            <Link to="/rent" className="text-gray-700 hover:text-blue-600">Rent</Link>
            <Link to="/sell" className="text-gray-700 hover:text-blue-600">Sell</Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600">Registration</Link>
            <Link to="/subscription" className="text-gray-700 hover:text-blue-600">Subscription</Link>
            <Link to="/HomeLoan" className="text-gray-700 hover:text-blue-600">Homelone</Link>

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
                {/* Add Subscription link */}
                {/* <Menu.Item>
                  <Link to="/SubscriptionPage" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Subscription
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/HomeLoan" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Homelone
                  </Link>
                </Menu.Item> */}
                
              </Menu.Items>
            </Menu>

            {user ? (
              <div className="flex items-center space-x-4">
                {/* Circular Avatar with User's First Letter */}
                <div className="h-8 w-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                {/* Logout Button */}
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

          {/* Mobile View */}
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
                  {/* Add Subscription link */}
                  {/* <Menu.Item>
                    <Link to="/subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Subscription
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                  <Link to="/HomeLoan" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Homelone
                  </Link>
                </Menu.Item> */}
                  {user ? (
                    <>
                      {/* Circular Avatar */}
                      <Menu.Item>
                        <div className="block px-4 py-2 flex items-center space-x-2">
                          <div className="h-8 w-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-gray-700">{user.name}</span>
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
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
};

export default Navbar;
