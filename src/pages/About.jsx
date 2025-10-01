import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cerahBg from '../Assets/img/Background/cerah.png';
import darkCompBg from '../Assets/img/Background/dark-computer.png';

// Team data
const teamMembers = [
  {
    name: "Gema Hafizh Maulidi",
    role: "Developer", 
    image: "/src/Assets/img/Team/Gema.png",
    description: "Mahasiswa Teknik Informatika Politeknik Negeri Jakarta",
    linkedin: "https://www.linkedin.com/in/gemahafizh/"
  },
  {
    name: "Muhamad Faried",
    role: "Developer",
    image: "/src/Assets/img/Team/Faried.png",
    description: "Mahasiswa Teknik Informatika Politeknik Negeri Jakarta",
    linkedin: "https://www.linkedin.com/in/muhamadfaried/"
  },
  {
    name: "Muhammad Izhhar Farhan",
    role: "Designer & Developer",
    image: "/src/Assets/img/Team/Izhhar.png", 
    description: "Mahasiswa Teknik Informatika Politeknik Negeri Jakarta",

    linkedin: "https://www.linkedin.com/in/muhammadizhharfarhan/"
  }
];

function About() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

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

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="min-h-screen pt-20 relative"
      style={{
        backgroundImage: `url(${cerahBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      {/* Hero Section styled like Home.jsx 119-156, full viewport first screen */}
      <div className="relative z-10 flex items-center justify-center px-6 w-full min-h-[calc(90vh-5rem)]">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-4xl lg:text-5xl font-montserrat italic font-bold text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)] mb-3 leading-tight transition-all duration-1000 ${
              isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ textShadow: '0px 6px 18px rgba(0, 0, 0, 0.7)' }}
          >
            Tentang Proyek dan Kontribusi
          </h1>

          <p
            className={`text-[19px] italic font-medium font-montserrat text-white mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 drop-shadow-[0_5px_14px_rgba(0,0,0,0.75)] ${
              isLoaded ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Jangan lupakan cerita rakyat Indonesia! Mulai coding untuk menjaga warisan budaya kita!
          </p>
        </div>
      </div>

      {/* About Website Section */}
      <section ref={aboutRef} className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-white mb-6">
                Digital Folklore Code Journey
              </h2>
              <div className="space-y-4 text-white leading-relaxed text-justify">
                <p>
                  Digital Folklore Code Journey adalah petualangan interaktif yang menyatukan keajaiban Legenda Danau Toba dengan kekuatan coding. Terinspirasi oleh Digital Heroes—tokoh yang menghidupkan perubahan melalui teknologi—kami mengajak generasi muda untuk tetap mengenal cerita rakyat sebagai warisan budaya Indonesia, dengan cara modern yang seru dan bermakna.
                </p>
                <p>
                  Melalui narasi memikat dan tantangan coding, Anda akan menguasai dasar-dasar HTML, CSS, dan JavaScript, menyelami nilai-nilai luhur budaya Batak, dan menjadi Digital Hero yang menjaga cerita rakyat tetap hidup. Bergabunglah dalam misi <em>Code for Change</em> untuk memastikan warisan budaya kita terus dikenang sebagai talenta digital masa depan!
                </p>
              </div>
            </div>
            <div className="scroll-animate flex items-center justify-end h-full">
              <div className="w-full max-w-md flex items-center justify-end">
                <img 
                  src="/src/Assets/img/Logo/digital-floklore.png" 
                  alt="Digital Folklore Logo"
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section 
        className="py-28 px-6 relative my-12"
        style={{
          backgroundImage: `url(${darkCompBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="text-center scroll-animate">
            <blockquote className="text-3xl md:text-4xl lg:text-3xl font-bold text-white leading-tight mb-8">
              Jadilah bagian dari Digital Heroes yang menjaga cerita rakyat Indonesia! Gunakan coding untuk membuat website, animasi, atau aplikasi yang memastikan Legenda Danau Toba tetap dikenang. Mulai dari sekarang!
            </blockquote>
            <cite className="text-xl text-white/80 italic">
              — Digital Folklore Code Journey
            </cite>
          </div>
        </div>
      </section>

      {/* Mission and Reason Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="scroll-animate flex">
              <div className="bg-black/50 rounded-2xl p-8 border border-white w-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Misi Kami</h3>
                <p className="text-white mb-6">
                  Menciptakan generasi yang tidak hanya mahir teknologi, 
                  tetapi juga peduli terhadap budaya dan lingkungan Indonesia.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">1000+</div>
                    <div className="text-sm text-white">Talenta Digital Indonesia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">500+</div>
                    <div className="text-sm text-white">Pelestari Budaya Indonesia</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-animate">
              <h2 className="text-4xl font-bold text-white mb-6">
                Alasan Membuat Proyek
              </h2>
              <div className="space-y-4 text-white leading-relaxed text-justify">
                <p>
                  Terinspirasi dari <em>Digital Heroes</em>—tokoh-tokoh yang menggunakan teknologi untuk dampak positif—<em>Digital Folklore Code Journey</em> mengajak masyarakat agar tidak melupakan cerita rakyat Indonesia, seperti Legenda Danau Toba. Cerita rakyat adalah warisan budaya yang memperkuat identitas nasional, dan kami percaya coding adalah cara modern untuk menjaganya tetap hidup.
                </p>
                <p>
                  Melalui narasi interaktif dan mini-game coding, proyek ini mengajarkan HTML, CSS, dan JavaScript sambil menanamkan nilai-nilai luhur seperti menepati janji dan ketaatan. Kami ingin menginspirasi generasi muda untuk menjadi talenta digital yang menjaga cerita rakyat, sejalan dengan <em>Empowering the Future: Digital Talents for a Greater Nation</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tim Pengembang
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tim kreatif yang berdedikasi menciptakan pengalaman belajar yang luar biasa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name} 
                className="scroll-animate"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 overflow-hidden group-hover:border-cyan-400/60 transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                    {member.linkedin && (
                      <div className="mt-5 flex justify-center">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/60 text-cyan-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors duration-200"
                          aria-label={`Kunjungi LinkedIn ${member.name}`}
                        >
                          {/* LinkedIn Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.25h4.52V24H.24V8.25zM8.339 8.25h4.335v2.136h.062c.604-1.146 2.08-2.353 4.281-2.353 4.58 0 5.427 3.016 5.427 6.937V24h-4.52v-6.993c0-1.668-.03-3.812-2.323-3.812-2.326 0-2.681 1.816-2.681 3.692V24H8.339V8.25z" />
                          </svg>
                          <span className="text-sm font-semibold">LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
