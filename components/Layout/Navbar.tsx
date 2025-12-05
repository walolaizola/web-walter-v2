import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Navbar should be transparent only on Home page when at the top
  const isHome = location.pathname === '/';
  const showSolidNavbar = scrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${showSolidNavbar ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tighter ${showSolidNavbar ? 'text-brand-dark' : 'text-white'}`}>
                WALTER<span className="text-brand-cyan">OLAIZOLA</span>
              </span>
              <span className={`text-[10px] tracking-[0.2em] font-medium uppercase ${showSolidNavbar ? 'text-slate-500' : 'text-slate-300'}`}>
                Data & AI Strategy
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-cyan ${
                  location.pathname === item.path 
                    ? 'text-brand-cyan' 
                    : showSolidNavbar ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-brand-orange text-white px-5 py-2 rounded-md font-bold text-sm hover:bg-orange-600 transition-colors shadow-md"
            >
              Hablemos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${showSolidNavbar ? 'text-slate-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-3 text-base font-medium rounded-md hover:text-brand-cyan hover:bg-slate-50 ${
                location.pathname === item.path ? 'text-brand-cyan bg-slate-50' : 'text-slate-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center mt-4 bg-brand-orange text-white px-5 py-3 rounded-md font-bold text-base shadow-md"
          >
            Hablemos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;