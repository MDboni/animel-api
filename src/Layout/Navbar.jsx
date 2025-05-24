import { UserIcon } from '@heroicons/react/24/outline';
import logo from '../assets/img/logo.webp';
import HeroSection from '../Component/HeroSection';

const Navbar = ({ children }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20">
        {/* Mobile View Dropdown (left) */}
        <div className="flex-1 lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Logo Centered */}
        <div className=" flex justify-center">
          <a className="flex items-center gap-2" href="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <h2 className="font-bold text-xl">Peddy</h2>
          </a>
        </div>

        {/* Profile Icon Right */}
        <div className="flex-1 flex justify-end">
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        {/* Desktop Menu Center */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    
    <HeroSection/>
      {/* Render children below the Navbar */}
      {children}
    </>
  );
};

export default Navbar;
