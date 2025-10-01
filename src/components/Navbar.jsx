import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/img/Logo/logo-image.png";


function Navbar() {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMouseEnter = (path) => {
    setHoveredLink(path);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/20 backdrop-blur shadow-lg shadow-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-1">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <div className="w-20 h-20 pt-1.5 flex items-center justify-center">
              {/* <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg> */}
              <img 
                src={logo}
                alt="icon" 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
            <div>
              <span className="text-20px font-bold font-montserrat italic bg-white bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Didingcode &nbsp;
              </span>
              <div className="text-20px font-bold font-montserrat italic bg-white bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">Technology</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative group px-6 py-3 font-mono text-sm font-medium transition-all duration-300 rounded-xl ${
                isActive('/') && hoveredLink !== '/' 
                  ? 'text-cyan-300' 
                  : hoveredLink === '/'
                  ? 'text-cyan-200'
                  : 'text-gray-300'
              }`}
              onMouseEnter={() => handleMouseEnter('/')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 text-base font-montserrat font-bold">Beranda</span>
              
              {/* Active state - bottom border with glow */}
              {isActive('/') && hoveredLink !== '/' && (
                <>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-cyan-400/50 rounded-full blur-sm"></div>
                </>
              )}
              
              {/* Hover state - glow box */}
              {hoveredLink === '/' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 rounded-xl border border-cyan-400/30 shadow-lg shadow-cyan-500/25"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-cyan-400/10 rounded-xl blur-sm"></div>
                </>
              )}
            </Link>
            
            <Link
              to="/about"
              className={`relative group px-6 py-3 font-mono text-sm font-medium transition-all duration-300 rounded-xl ${
                isActive('/about') && hoveredLink !== '/about' 
                  ? 'text-purple-300' 
                  : hoveredLink === '/about'
                  ? 'text-purple-200'
                  : 'text-gray-300'
              }`}
              onMouseEnter={() => handleMouseEnter('/about')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 text-base font-montserrat font-bold">Tentang Kami</span>
              
              {/* Active state - bottom border with glow */}
              {isActive('/about') && hoveredLink !== '/about' && (
                <>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-purple-400/50 rounded-full blur-sm"></div>
                </>
              )}
              
              {/* Hover state - glow box */}
              {hoveredLink === '/about' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-xl border border-purple-400/30 shadow-lg shadow-purple-500/25"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-400/10 rounded-xl blur-sm"></div>
                </>
              )}
            </Link>

            <Link
              to="/quiz"
              className={`relative group px-6 py-3 font-mono text-sm font-medium transition-all duration-300 rounded-xl border ${
                isActive('/quiz') && hoveredLink !== '/quiz' 
                  ? 'text-purple-300 border-purple-400/50' 
                  : hoveredLink === '/quiz'
                  ? 'text-purple-200 border-purple-400/70'
                  : 'text-gray-300 border-white/30'
              }`}
              onMouseEnter={() => handleMouseEnter('/quiz')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 text-base font-montserrat font-bold">Mulai Menjelajah!</span>

              {/* Active state - bottom border with glow */}
              {isActive('/quiz') && hoveredLink !== '/quiz' && (
                <>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-purple-400/50 rounded-full blur-sm"></div>
                </>
              )}

              {/* Hover state - glow box */}
              {hoveredLink === '/quiz' && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-xl border border-purple-400/50 shadow-lg shadow-purple-500/25"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-400/10 rounded-xl blur-sm"></div>
                </>
              )}
            </Link>

          </div>

          {/* AI Status Indicator */}
          {/* <div className="hidden md:flex items-center space-x-3">
            
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
