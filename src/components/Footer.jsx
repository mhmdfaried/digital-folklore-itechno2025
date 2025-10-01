import logo from "../assets/img/Logo/logo-image.png";
import digitalfolklore from "../assets/img/Logo/digital-floklore.png";
import logopnj from "../assets/img/Logo/logo-pnj.png";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl">
                <img 
                  src={digitalfolklore}
                  alt="Didingcode Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold text-white">Digital Folklore</h3>
                <p className="text-sm text-gray-400 font-montserrat">Code Journey</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-justify">
              Mengembangkan teknologi untuk melestarikan dan memperkenalkan kekayaan budaya Indonesia 
              melalui platform digital yang interaktif dan edukatif.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-lg flex items-center justify-center hover:from-blue-600/30 hover:to-blue-700/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              
              {/* Instagram */}
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg flex items-center justify-center hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-pink-500 group-hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              
              {/* TikTok */}
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-lg flex items-center justify-center hover:from-gray-600/30 hover:to-gray-700/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              
              {/* LinkedIn */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700/20 to-blue-800/20 rounded-lg flex items-center justify-center hover:from-blue-700/30 hover:to-blue-800/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-blue-700 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              
              {/* YouTube */}
              <div className="w-10 h-10 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-red-500 group-hover:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-montserrat font-bold text-white mb-6">Kolaborasi & Dukungan</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Digital Folklore */}
              <div className="group">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="w-16 h-16 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all duration-300">
                    <img 
                      src={logo}
                      alt="Digital Folklore Logo" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">Didingcode</h4>
                    <p className="text-sm text-gray-400">Tim Pengembang</p>
                  </div>
                </div>
              </div>

              {/* PNJ */}
              <div className="group">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-16 h-16 bg-white/5 rounded-lg p-3 group-hover:bg-white/10 transition-all duration-300">
                    <img 
                      src={logopnj}
                      alt="PNJ Logo" 
                      className="w-full h-full object-contain rounded-lg" 
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">Politeknik Negeri Jakarta</h4>
                    <p className="text-sm text-gray-400">Institusi Pendidikan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            {/* <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400 font-montserrat">
              Copyright &copy; {new Date().getFullYear()} Didingcode Technology. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-montserrat cursor-pointer"
          >
            Kebijakan Privasi
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-montserrat cursor-pointer"
          >
            Syarat dan Ketentuan
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-montserrat cursor-pointer"
          >
            Hubungi Kami
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
  export default Footer;
  