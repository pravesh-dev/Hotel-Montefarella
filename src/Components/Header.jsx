import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../Redux/actions'; // Adjust path as necessary
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector(state => state.language.language);
  const location = useLocation();

  return (
    <header className="w-full flex justify-between items-center py-5 px-2 md:px-3 lg:px-20 fixed top-0 left-0 bg-black/30 backdrop-blur-md z-[99] text-white">
      <div className="flex items-center">
        <img alt="Montfarella Logo" className="w-9 md:w-10 lg:w-12 filter invert-1" src={Logo} />
        <div className="flex flex-col items-center">
          <span className="text-[1.15rem] md:text-xl lg:text-2xl uppercase font-bellefair">Montefarella</span>
          <span className="text-[0.5rem] md:text-[0.55rem] lg:text-[0.75rem] ml-1 tracking-[3px] text-white/90 uppercase font-mulish">
            Luxury Trullo & Spa
          </span>
        </div>
      </div>
      <nav className={`flex flex-col md:flex-row bg-neutral-900 md:bg-transparent w-80 py-20 gap-5 items-center fixed top-0 h-screen md:static md:w-auto md:gap-7 lg:gap-10 xl:gap-16 md:text-sm lg:text-base md:h-auto md:py-0 ${isMenuOpen ? 'left-0' : '-left-full'} duration-150 font-poppins z-[99]`}>
        <Link className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`} to="/">
          HOME
        </Link>
        <Link className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/about' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/about' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`} to="/about">
          ABOUT
        </Link>
        <Link className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/booking' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/booking' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`} to="/booking">
          SERVICE
        </Link>
        <Link className={`w-full py-3 bg-[#c095691b] text-center nav_items ${location.pathname === '/contact' ? 'text-primary' : 'hover:text-primary'} tracking-[1px] border-b-2 ${location.pathname === '/contact' ? 'border-primary' : 'border-transparent'} md:w-auto md:py-0 md:bg-transparent md:border-none`} to="/contact">
          CONTACT US
        </Link>
        <button className='absolute top-3 right-3 text-lg w-10 h-10 rounded-md bg-red-600 text-white md:hidden' onClick={() => setIsMenuOpen(false)}>X</button>
        <div className="py-2 border-t-2 border-b-2 border-primary w-full md:w-28 lg:w-36 text-center px-2 xl:py-1">
          <select
            className="bg-transparent w-full text-primary border-none outline-none font-merriweather text-xl md:text-sm font-medium cursor-pointer lg:px-2 lg:text-base"
            value={language}
            onChange={(e) => dispatch(changeLanguage(e.target.value))}
          >
            <option value="english">English</option>
            <option value="italy">italiano</option>
          </select>
        </div>
      </nav>
      <button className='text-4xl px-3 py-1 rounded-sm text-white md:hidden' onClick={() => setIsMenuOpen(true)}><HiOutlineMenuAlt3 /></button>
    </header>
  );
}

export default Header;
