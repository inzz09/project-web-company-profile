import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Beranda', 'Tentang', 'Layanan', 'Berita', 'Galeri', 'Karir'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Semen Indonesia Logo"
            className="h-9 md:h-10 transition duration-300"
          />
          <span className="hidden sm:inline-block text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
            Semen<span className="text-red-400">Indonesia</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 ml-auto font-medium text-red-600">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group transition hover:text-red-700"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-1 pb-3"
          >
            <div className="rounded-lg shadow border border-red-100 bg-white/90 backdrop-blur-md overflow-hidden">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-5 py-3 font-medium text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
