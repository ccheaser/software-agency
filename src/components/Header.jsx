// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHizmetlerOpen, setIsHizmetlerOpen] = useState(false);
  const [isKurumlarOpen, setIsKurumlarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full transition-all duration-200 ${
        isScrolled
          ? 'fixed z-20 left-1/2 -translate-x-1/2 bg-white shadow-md py-2 mt-4 max-w-5xl rounded-lg'
          : 'fixed z-20 w-full top-0 left-0 bg-[#04051b] py-3'
      }`}
    >
      <div className={`mx-auto px-4 md:px-8 ${isScrolled ? 'max-w-4xl' : 'max-w-7xl'}`}>
        <div className={`flex items-center justify-between ${
          isScrolled ? 'h-12' : 'h-14'
        }`}>
          {/* Logo */}
          <div className={`text-xl font-bold w-40 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            <img src="/logo-placeholder.svg" alt="Logo" className="h-8" />
          </div>

          {!isSearchOpen ? (
            <>
              {/* Ana Menü */}
              <nav className="flex-1">
                <ul className="flex items-center justify-center space-x-8">
                  <li className="relative group">
                    <button 
                      className={`flex items-center ${
                        isScrolled 
                          ? 'text-gray-800 hover:text-blue-500' 
                          : 'text-white hover:text-indigo-200'
                      }`}
                      onClick={() => setIsHizmetlerOpen(!isHizmetlerOpen)}
                    >
                      Hizmetler
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isHizmetlerOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                        <a href="#yazilim" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Yazılım Geliştirme</a>
                        <a href="#danismanlik" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Danışmanlık</a>
                        <a href="#bulut" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Bulut Çözümleri</a>
                      </div>
                    )}
                  </li>
                  <li className="relative group">
                    <button 
                      className={`flex items-center ${
                        isScrolled 
                          ? 'text-gray-800 hover:text-blue-500' 
                          : 'text-white hover:text-indigo-200'
                      }`}
                      onClick={() => setIsKurumlarOpen(!isKurumlarOpen)}
                    >
                      Kurumlar
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isKurumlarOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                        <a href="#kurumsal" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kurumsal</a>
                        <a href="#kamu" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kamu</a>
                        <a href="#startups" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Startups</a>
                      </div>
                    )}
                  </li>
                  <li>
                    <a 
                      href="#hakkimizda" 
                      className={`${
                        isScrolled 
                          ? 'text-gray-800 hover:text-blue-500' 
                          : 'text-white hover:text-indigo-200'
                      }`}
                    >
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#iletisim" 
                      className={`${
                        isScrolled 
                          ? 'text-gray-800 hover:text-blue-500' 
                          : 'text-white hover:text-indigo-200'
                      }`}
                    >
                      İletişim
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Sağ Menü */}
              <div className="flex items-center space-x-6 w-40 justify-end">
                <button 
                  className={`${
                    isScrolled 
                      ? 'text-gray-800 hover:text-blue-500' 
                      : 'text-white hover:text-indigo-200'
                  }`}
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search size={20} />
                </button>
                <button className={`${
                  isScrolled
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-white hover:bg-indigo-100 text-[#5d43d0]'
                  } px-4 py-2 rounded-md transition-colors`}
                >
                  Teklif Al
                </button>
              </div>
            </>
          ) : (
            /* Arama Çubuğu */
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="relative w-full max-w-2xl flex items-center">
                <input
                  type="text"
                  placeholder="Ara..."
                  className="w-full py-2 pl-10 pr-4 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent text-white placeholder-indigo-200"
                  autoFocus
                />
                <Search size={20} className={`absolute left-0 top-1/2 -translate-y-1/2 ${
                  isScrolled ? 'text-gray-400' : 'text-white'
                }`} />
                <button 
                  className={`absolute right-0 top-1/2 -translate-y-1/2 ${
                    isScrolled 
                      ? 'text-gray-400 hover:text-gray-600' 
                      : 'text-white hover:text-indigo-200'
                  }`}
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
