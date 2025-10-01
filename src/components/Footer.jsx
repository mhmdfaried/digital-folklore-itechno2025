import logo from "../assets/img/Logo/logo-image.png";
import digitalfolklore from "../assets/img/Logo/digital-floklore.png";
import logopnj from "../assets/img/Logo/logo-pnj.png";


function Footer() {
    return (
      <footer className="bg-[#2a2829] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Logo Section */}
          <div className="font-montserrat mb-8">
            <div className="flex justify-center items-start gap-12 flex-wrap">
              {/* Logo pertama - Didingcode */}
              <div className="flex flex-col items-center group">
                <p className="text-sm mb-3 text-gray-300 font-semibold uppercase tracking-wide">Dibuat oleh</p>
                <div className="w-32 h-32 flex items-center justify-center bg-white/5 rounded-xl p-4 transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/10">
                  <img 
                    src={logo}
                    alt="Didingcode Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              
              {/* Logo kedua - Digital Folklore */}
              <div className="flex flex-col items-center group">
                <p className="text-sm mb-3 text-gray-300 font-semibold uppercase tracking-wide">&nbsp;</p>
                <div className="w-32 h-32 flex items-center justify-center bg-white/5 rounded-xl p-4 transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/10">
                  <img 
                    src={digitalfolklore}
                    alt="Digital Folklore Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              
              {/* Logo ketiga - PNJ */}
              <div className="flex flex-col items-center group">
                <p className="text-sm mb-3 text-gray-300 font-semibold uppercase tracking-wide">Institusi</p>
                <div className="w-32 h-32 flex items-center justify-center bg-white/5 rounded-xl p-4 transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/10">
                  <img 
                    src={logopnj}
                    alt="PNJ Logo" 
                    className="w-full h-full object-contain rounded-xl" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700 mb-6"></div>
          
          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Copyright &copy; {new Date().getFullYear()} Didingcode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  