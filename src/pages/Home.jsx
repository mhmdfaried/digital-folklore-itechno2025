import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BgHome from '../assets/img/Background/landing-image.jpg';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    // Mouse movement effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url(${BgHome})`,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.1)`,
          }}
        ></div>
        {/* Dynamic Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/10 to-black/80 transition-opacity duration-1000"
          style={{
            opacity: isLoaded ? 1 : 0
          }}
        ></div>
      </div>

      {/* Enhanced Floating Particles with Mouse Interaction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse transition-transform duration-1000"
          style={{
            top: `${20 + mousePosition.y * 0.1}%`,
            left: `${20 + mousePosition.x * 0.05}%`,
            transform: `scale(${1 + mousePosition.x * 0.001})`
          }}
        ></div>
        <div 
          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping transition-transform duration-1000"
          style={{
            top: `${40 + mousePosition.y * 0.08}%`,
            right: `${32 + mousePosition.x * 0.03}%`,
            animationDelay: '0.5s'
          }}
        ></div>
        <div 
          className="absolute w-3 h-3 bg-emerald-400 rounded-full animate-pulse transition-transform duration-1000"
          style={{
            bottom: `${40 + mousePosition.y * 0.06}%`,
            left: `${32 + mousePosition.x * 0.04}%`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 bg-pink-400 rounded-full animate-ping transition-transform duration-1000"
          style={{
            bottom: `${20 + mousePosition.y * 0.07}%`,
            right: `${20 + mousePosition.x * 0.06}%`,
            animationDelay: '1.5s'
          }}
        ></div>
        
        {/* Additional floating elements */}
        <div 
          className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-bounce transition-transform duration-1000"
          style={{
            top: `${60 + mousePosition.y * 0.05}%`,
            left: `${60 + mousePosition.x * 0.08}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse transition-transform duration-1000"
          style={{
            top: `${30 + mousePosition.y * 0.09}%`,
            right: `${60 + mousePosition.x * 0.07}%`,
            animationDelay: '2.5s'
          }}
        ></div>
      </div>
      
      {/* Hero Section with Enhanced Animations */}
      <div className="relative z-10 flex items-center justify-center px-6 py-20 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className={`text-5xl md:text-4xl lg:text-5xl font-montserrat italic font-bold text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)] mb-3 leading-tight transition-all duration-1000 ${
              isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              textShadow: '0px 6px 18px rgba(0, 0, 0, 0.7)'
            }}
          >
            Digital Floklore Code Journey
          </h1>

          <p
            className={`text-[19px] italic font-medium font-montserrat text-white mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 drop-shadow-[0_5px_14px_rgba(0,0,0,0.75)] ${
              isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Jelajahi Legenda Danau Toba sambil belajar coding untuk selamatkan alam Indonesia!
          </p>

          <div 
            className={`transition-all duration-1000 delay-500 ${
              isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/quiz"
              className="group inline-block px-14 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-black/40 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-black/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 bg-black/40"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute text-cyan-400/20 font-mono text-sm animate-float"
          style={{
            top: `${10 + mousePosition.y * 0.02}%`,
            left: `${10 + mousePosition.x * 0.01}%`,
            animationDelay: '0s'
          }}
        >
        </div>
        <div 
          className="absolute text-purple-400/20 font-mono text-sm animate-float"
          style={{
            top: `${80 + mousePosition.y * 0.03}%`,
            right: `${15 + mousePosition.x * 0.02}%`,
            animationDelay: '1s'
          }}
        >
        </div>
        <div 
          className="absolute text-emerald-400/20 font-mono text-sm animate-float"
          style={{
            top: `${50 + mousePosition.y * 0.025}%`,
            left: `${80 + mousePosition.x * 0.015}%`,
            animationDelay: '2s'
          }}
        >
        </div>
      </div>
    </div>
  );
}

export default Home;
