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
            <p className="text-gray-300 leading-relaxed">
              Mengembangkan teknologi untuk melestarikan dan memperkenalkan kekayaan budaya Indonesia 
              melalui platform digital yang interaktif dan edukatif.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-green-400 group-hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
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
                  <div className="w-16 h-16 bg-white/5 rounded-lg p-3 group-hover:bg-white/10 transition-all duration-300">
                    <img 
                      src={logo}
                      alt="Digital Folklore Logo" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">Didingcode</h4>
                    <p className="text-sm text-gray-400">Software Developer Team</p>
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
            <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
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
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-montserrat">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-montserrat">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-montserrat">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
  export default Footer;
  