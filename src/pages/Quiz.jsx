import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quiz1 from '../assets/img/Background/toba-large-image.jpg';
import Quiz2 from '../assets/img/Background/mancing-large-image.jpg';
import Quiz3 from '../assets/img/Background/fish-large-image.jpg';
import Quiz4 from '../assets/img/Background/fish-talk-large-image.png';
import Quiz5 from '../assets/img/Background/putri-large-image.jpg';
import Quiz6 from '../assets/img/Background/family-large-image.jpg';
import Quiz7 from '../assets/img/Background/tenggelam-large-image.jpg';
import Quiz8 from '../assets/img/Background/final-large-image.png';
import RumahImage from '../assets/img/Quiz/rumah-image.png';
import RumahImageGray from '../assets/img/Quiz/rumah-image-gray.png';
import PancinganImage from '../assets/img/Quiz/pancingan-image.png';
import PancinganImageGray from '../assets/img/Quiz/pancingan-image-gray.png';
import OmbakImage from '../assets/img/Character/ombak-image.png';
import IkanMasImage from '../assets/img/Character/ikan-mas-image.png';

const Quiz = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [correctAnswers] = useState({
    'section-1': '<section>',
    'section-2': '<ul>',
    'section-3': '<img>',
    'section-4': 'bottom: 0;',
    'section-5': '<form>',
    'section-6': 'clearInterval()',
    'section-7': 'onclick'
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => new Set([...prev, sectionId]));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.quiz-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleAnswerSelect = (sectionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [sectionId]: answer
    }));
  };

  const getAnswerButtonStyle = (sectionId, option) => {
    const selected = selectedAnswers[sectionId];
    const correct = correctAnswers[sectionId];
    
    if (!selected) {
      return 'bg-white/50 hover:bg-gray-500 text-gray-200 border-2 border-transparent';
    }
    
    if (option === correct) {
      return 'bg-green-500 border-2 border-green-400 text-white';
    }
    
    if (selected === option && option !== correct) {
      return 'bg-red-500 border-2 border-red-400 text-white';
    }
    
    if (option === correct && selected === correct) {
      return 'bg-green-500 border-2 border-green-400 text-white';
    }
    
    return 'bg-white/50 text-gray-200 border-2 border-transparent opacity-50';
  };

  return (
    <div className="min-h-screen">
      {/* Section 1 - Toba Lake */}
      <section 
        id="section-1"
        className="quiz-section min-h-screen flex items-center justify-center lg:justify-end relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-20 xl:pt-0 py-8 lg:py-0"
      >
        {/* Background Image - Full Screen */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${Quiz1})`,
            transform: 'scaleX(-1)'
          }}
        ></div>
        
        {/* Content Box - Responsive Overlay */}
        <div className="relative z-10 w-full lg:w-1/2 mx-4 lg:mx-10 h-full flex items-center justify-center px-4 lg:px-0">
          <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-white transition-all duration-1000 transform w-full max-w-4xl ${
            visibleSections.has('section-1') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-white">
              Pengenalan Toba sebagai Petani Sendiri
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-10 leading-relaxed text-white">
              Pada zaman dahulu, di sebuah desa di Sumatera Utara, hiduplah seorang petani bernama Toba. Ia hidup sendiri sebatang kara, setiap hari bekerja menggarap ladang dan mencari ikan untuk memenuhi kebutuhannya sehari-hari.
            </p>
            
            {/* Quiz Section */}
            <div className="bg-white/30 rounded-xl p-3 lg:p-4 border border-gray-600">
              <h3 className="text-lg lg:text-xl font-bold italic text-white font-montserrat mb-2" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>Soal: Bantu Toba Bangun Rumah Sederhana</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-white font-montserrat" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>Toba sedang membangun rumah sederhana. Untuk membuat bagian utama rumah, tag apa yang sebaiknya digunakan?</p>
              
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
                {/* Answer Options - Mobile: Full Width, Desktop: Left Side */}
                <div className="w-full lg:w-1/2 space-y-4 lg:space-y-7">
                  {['<div>', '<section>', '<p>'].map((option, index) => (
                    <button 
                      key={index}
                      onClick={() => handleAnswerSelect('section-1', option)}
                      className={`w-full font-medium py-4 lg:py-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base ${getAnswerButtonStyle('section-1', option)}`}
                      style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {/* House Image - Mobile: Below Options, Desktop: Right Side */}
                <div className="w-full lg:w-1/2 bg-white/50 rounded-lg flex items-center justify-center relative overflow-hidden h-48 lg:h-auto">
                  {/* Gray Image - Disappears when correct */}
                  <img 
                    src={RumahImageGray} 
                    alt="Rumah Toba" 
                    className={`w-full h-full max-h-full object-contain rounded-lg transition-opacity duration-1000 ${
                      selectedAnswers['section-1'] === correctAnswers['section-1'] ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Colored Image - Appears when correct */}
                  <img 
                    src={RumahImage} 
                    alt="Rumah Toba" 
                    className={`w-full h-full max-h-full object-contain rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
                      selectedAnswers['section-1'] === correctAnswers['section-1'] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Fishing */}
      <section 
        id="section-2"
        className="quiz-section min-h-screen flex items-center justify-center lg:justify-start relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-0 py-8 lg:py-0"
      >
        {/* Background Image - Full Screen */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${Quiz2})`
          }}
        ></div>
        
        {/* Content Box - Responsive Overlay */}
        <div className="relative z-10 w-full lg:w-1/2 mx-4 lg:mx-10 h-full flex items-center justify-center px-4 lg:px-0">
          <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-white transition-all duration-1000 transform w-full max-w-4xl ${
            visibleSections.has('section-2') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-white">
              Toba Pergi ke Sungai
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-10 leading-relaxed text-white">
              Pada suatu hari, Toba pergi ke sungai di dekat rumahnya, ia bermaksud mencari ikan untuk lauknya hari ini. Dengan hanya berbekal sebuah kail, umpan, dan tempat ikan, ia pun langsung menuju ke sungai.
            </p>
            
            {/* Quiz Section */}
            <div className="bg-white/30 rounded-xl p-3 lg:p-4 border border-gray-600">
              <h3 className="text-lg lg:text-xl font-bold italic text-white font-montserrat mb-2" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>Soal: Bantu Toba Siapkan Alat Pancing</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-white font-montserrat" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>Toba pergi ke sungai untuk memancing. Ia membawa kail, umpan, dan ember.
              Jika kita ingin menuliskan daftar alat pancing tersebut dalam HTML, elemen yang paling tepat digunakan adalah …</p>
              
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
                {/* Answer Options - Mobile: Full Width, Desktop: Left Side */}
                <div className="w-full lg:w-1/2 space-y-4 lg:space-y-7">
                  {['<ul>', '<aside>', '<p>'].map((option, index) => (
                    <button 
                      key={index}
                      onClick={() => handleAnswerSelect('section-2', option)}
                      className={`w-full font-medium py-4 lg:py-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base ${getAnswerButtonStyle('section-2', option)}`}
                      style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {/* Pancingan Image - Mobile: Below Options, Desktop: Right Side */}
                <div className="w-full lg:w-1/2 bg-white/50 rounded-lg flex items-center justify-center relative overflow-hidden h-48 lg:h-auto">
                  {/* Gray Image - Disappears when correct */}
                  <img 
                    src={PancinganImageGray} 
                    alt="Alat Pancing Toba" 
                    className={`w-full h-full max-h-[280px] object-contain rounded-lg transition-opacity duration-1000 ${
                      selectedAnswers['section-2'] === correctAnswers['section-2'] ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Colored Image - Appears when correct */}
                  <img 
                    src={PancinganImage} 
                    alt="Alat Pancing Toba" 
                    className={`w-full h-full max-h-[280px] object-contain rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
                      selectedAnswers['section-2'] === correctAnswers['section-2'] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Fish */}
      <section 
        id="section-3"
        className="quiz-section min-h-screen flex items-center justify-center lg:justify-end relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-0 py-8 lg:py-0"
      >
        {/* Background Image - Full Screen */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${Quiz3})`
          }}
        ></div>
        
        {/* Content Box - Responsive Overlay */}
        <div className="relative z-10 w-full lg:w-1/2 mx-4 lg:mx-10 h-full flex items-center justify-center px-4 lg:px-0">
          <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-white transition-all duration-1000 transform w-full max-w-4xl ${
            visibleSections.has('section-3') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-white">
              Menangkap Ikan Besar
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-10 leading-relaxed text-white">
              Setelah sesampainya di sungai, petani tersebut langsung melemparkan kailnya. Sambil menunggu kailnya dimakan ikan, Toba berdoa, "Ya Tuhan, semoga aku dapat ikan banyak hari ini."Beberapa saat kemudian, kail yang telah dilemparkannya terlihat bergoyang-goyang. Ia segera menarik kailnya. Petani tersebut sangat senang karena ternyata ikan yang didapatkannya kali ini sangat besar.
            </p>
            
            {/* Quiz Section */}
            <div className="bg-white/30 rounded-xl p-3 lg:p-4 border border-gray-600">
              <h3 className="text-lg lg:text-xl font-bold italic text-white font-montserrat mb-2" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>Soal: Bantu Toba Memancing Ikan</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-white font-montserrat" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>Tag apa yang paling tepat untuk menampilkan gambar ikan mas?</p>
              
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
                {/* Answer Options - Mobile: Full Width, Desktop: Left Side */}
                <div className="w-full lg:w-1/2 space-y-4 lg:space-y-7">
                  {['<img>', '<picture>', '<figure>'].map((option, index) => (
                    <button 
                      key={index}
                      onClick={() => handleAnswerSelect('section-3', option)}
                      className={`w-full font-medium py-4 lg:py-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base ${getAnswerButtonStyle('section-3', option)}`}
                      style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {/* Image Container - Mobile: Below Options, Desktop: Right Side */}
                <div className="w-full lg:w-1/2 bg-white/50 rounded-lg flex items-center justify-center relative overflow-hidden h-48 lg:h-auto">
                  {/* Ombak Image - Always visible, zoomed out */}
                  <img 
                    src={OmbakImage} 
                    alt="Ombak" 
                    className="w-[200%] h-[200%] object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                  {/* Ikan Mas Image - Appears from bottom when correct */}
                  <img 
                    src={IkanMasImage} 
                    alt="Ikan Mas" 
                    className={`w-full h-full max-h-[280px] object-contain rounded-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                      selectedAnswers['section-3'] === correctAnswers['section-3'] 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-full'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Fish Talk */}
      <section 
        id="section-4"
        className="quiz-section min-h-screen flex items-center justify-center lg:justify-start relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-0 py-8 lg:py-0"
      >
        {/* Background Image - Full Screen */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${Quiz4})`,
            transform: 'scaleX(-1)'
          }}
        ></div>
        
        {/* Content Box - Responsive Overlay */}
        <div className="relative z-10 w-full lg:w-1/2 mx-4 lg:mx-10 h-full flex items-center justify-center px-4 lg:px-0">
          <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-white transition-all duration-1000 transform w-full max-w-4xl ${
            visibleSections.has('section-4') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-white">
              Toba Pergi ke Sungai
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-10 leading-relaxed text-white">
              Setelah beberapa saat memandangi ikan hasil tangkapannya, Toba sangat terkejut. Ternyata ikan yang ditangkapnya itu bisa berbicara! "Tolong aku jangan dimakan Pak, biarkan aku hidup", ucap ikan itu. Tanpa banyak tanya, ikan tangkapannya itu langsung dikembalikan ke dalam sungai kembali.
            </p>
            
            {/* Quiz Section */}
            <div className="bg-white/30 rounded-xl p-3 lg:p-4 border border-gray-600">
              <h3 className="text-lg lg:text-xl font-bold italic text-white font-montserrat mb-2" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>Soal: Bantu Toba Kembalikan Ikan dengan CSS</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-white font-montserrat" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>Lengkapilah kode CSS berikut agar elemen ikan (.fish) berada di dalam sungai (.river), tepat di tengah horizontal dan dekat bagian bawah air.</p>
              
              {/* CSS Code and Visual - Responsive Layout */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4 lg:mb-6">
                {/* CSS Code - Mobile: Full Width, Desktop: Left Side */}
                <div className="w-full lg:w-1/2 bg-gray-700 rounded-lg p-3 lg:p-4">
                  <pre className="text-white text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
{`.river {
  position: relative;
  height: 220px;
  background: lightblue;
}

.fish {
  position: absolute;
  left: 50%;
  ___: 0;            /* isi bagian ini */
  transform: translateX(-50%);
}`}
                  </pre>
                </div>
                
                {/* Visual Representation - Mobile: Below Code, Desktop: Right Side */}
                <div className="w-full lg:w-1/2 bg-white/50 rounded-lg flex items-center justify-center relative overflow-hidden h-48 lg:h-auto">
                  {/* Ombak Image - Always visible, zoomed out */}
                  <img 
                    src={OmbakImage} 
                    alt="Ombak" 
                    className="w-[200%] h-[200%] object-cover rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                  {/* Ikan Mas Image - Disappears by going down when correct */}
                  <img 
                    src={IkanMasImage} 
                    alt="Ikan Mas" 
                    className={`w-full h-full max-h-[300px] object-contain rounded-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                      selectedAnswers['section-4'] === correctAnswers['section-4'] 
                        ? 'opacity-0 translate-y-full' 
                        : 'opacity-100 translate-y-0'
                    }`}
                  />
                </div>
              </div>
              
              {/* Answer Options - Responsive Grid */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {['top: 0;', 'bottom: 0;', 'margin-bottom: 0;'].map((option, index) => (
                  <button 
                    key={index}
                    onClick={() => handleAnswerSelect('section-4', option)}
                    className={`flex-1 font-medium py-3 px-4 sm:px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base ${getAnswerButtonStyle('section-4', option)}`}
                    style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Princess */}
      <section 
        id="section-5"
        className="quiz-section min-h-screen flex items-center justify-center lg:justify-end relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-0 py-8 lg:py-0"
      >
        {/* Background Image - Full Screen */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${Quiz5})`
          }}
        ></div>
        
        {/* Content Box - Responsive Overlay */}
        <div className="relative z-10 w-full lg:w-1/2 mx-4 lg:mx-10 h-full flex items-center justify-center px-4 lg:px-0">
          <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-white transition-all duration-1000 transform w-full max-w-4xl ${
            visibleSections.has('section-5') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-white">
              Ikan Berubah Jadi Wanita
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-10 leading-relaxed text-white">
              Toba terkejut karena tiba-tiba ikan tersebut berubah menjadi seorang wanita yang sangat cantik. "Jangan takut Pak, aku tidak akan menyakiti kamu," kata si ikan. "Siapakah kamu ini? Bukankah kamu seekor ikan?" tanya Toba. "Aku adalah seorang putri yang dikutuk, karena melanggar aturan kerajaan," jawab Wanita itu. "Terima kasih engkau sudah membebaskan aku dari kutukan itu. Sebagai imbalannya, aku bersedia kau jadikan istri," kata Wanita itu. Tanpa pikir lama, petani itu pun mengangguk. Namun, wanita ini mensyaratkan satu permintaan: "Kamu berjanji tidak boleh menceritakan asal-usul saya yang berasal dari seekor ikan."
            </p>
            
            {/* Quiz Section */}
            <div className="bg-white/30 rounded-xl p-3 lg:p-4 border border-gray-600">
              <h3 className="text-lg lg:text-xl font-bold italic text-white font-montserrat mb-2" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>Soal: Formulir Pernikahan</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-white font-montserrat" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>Tag HTML apa yang digunakan untuk membuat formulir tempat Toba menuliskan janjinya?</p>
              
              <div className="flex gap-4 lg:gap-6 items-stretch">
                {/* Answer Options - Full Width */}
                <div className="w-full space-y-4 lg:space-y-7">
                  {['<form>', '<fieldset>', '<legend>'].map((option, index) => (
                    <button 
                      key={index}
                      onClick={() => handleAnswerSelect('section-5', option)}
                      className={`w-full font-medium py-4 lg:py-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base ${getAnswerButtonStyle('section-5', option)}`}
                      style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Family */}
      <section 
        id="section-6"
        className="quiz-section min-h-screen flex items-center justify-center lg:justify-start relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-0 py-8 lg:py-0"
      >
        {/* Background Image - Full Screen */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${Quiz6})`,
            transform: 'scaleX(-1)'
          }}
        ></div>
        
        {/* Content Box - Responsive Overlay */}
        <div className="relative z-10 w-full lg:w-1/2 mx-4 lg:mx-10 h-full flex items-center justify-center px-4 lg:px-0">
          <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-white transition-all duration-1000 transform w-full max-w-4xl ${
            visibleSections.has('section-6') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-white">
              Kelahiran Samosir dan Kebiasaannya
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-10 leading-relaxed text-white">
              Setelah beberapa tahun menikah, kebahagiaan Toba bertambah karena sang istri telah melahirkan seorang anak laki-laki yang diberi nama Samosir. Anak mereka tumbuh menjadi anak yang sangat tampan dan kuat, tetapi ada kebiasaan yang membuat heran orang-orang: Samosir selalu merasa lapar dan tidak pernah merasa kenyang.
            </p>
            
            {/* Quiz Section */}
            <div className="bg-white/30 rounded-xl p-3 lg:p-4 border border-gray-600">
              <h3 className="text-lg lg:text-xl font-bold italic text-white font-montserrat mb-2" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>Soal: Bantu Samosir Atur Lapar dengan JS</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-white font-montserrat" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>Jika setInterval() digunakan untuk membuat Samosir selalu lapar, maka fungsi JavaScript apa yang digunakan untuk menahan lapar (menghentikan interval)?</p>
              
              <div className="flex gap-4 lg:gap-6 items-stretch">
                {/* Answer Options - Full Width */}
                <div className="w-full space-y-4 lg:space-y-7">
                  {['setTimeout()', 'clearInterval()', 'stopInterval()'].map((option, index) => (
                    <button 
                      key={index}
                      onClick={() => handleAnswerSelect('section-6', option)}
                      className={`w-full font-medium py-4 lg:py-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base ${getAnswerButtonStyle('section-6', option)}`}
                      style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Sinking */}
      <section 
        id="section-7"
        className="quiz-section min-h-screen flex items-center justify-center lg:justify-end relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-0 py-8 lg:py-0"
      >
        {/* Background Image - Full Screen */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url(${Quiz7})`
          }}
        ></div>
        
        {/* Content Box - Responsive Overlay */}
        <div className="relative z-10 w-full lg:w-1/2 mx-4 lg:mx-10 h-full flex items-center justify-center px-4 lg:px-0">
          <div className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-white transition-all duration-1000 transform w-full max-w-4xl ${
            visibleSections.has('section-7') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 text-white">
              Insiden Makanan, Pelanggaran, dan Pembentukan Danau Toba
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 lg:mb-10 leading-relaxed text-white">
              Hingga suatu hari, Samosir mendapat tugas mengantarkan makanan ke sawah, tapi dia memakannya habis. Toba marah: "Dasar anak ikan!" Seketika anak dan istrinya hilang, air menyembur membentuk Danau Toba.
            </p>
            
            {/* Quiz Section */}
            <div className="bg-white/30 rounded-xl p-3 lg:p-4 border border-gray-600">
              <h3 className="text-lg lg:text-xl font-bold italic text-white font-montserrat mb-2" style={{textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>Soal: Event Handling dalam HTML</h3>
              <p className="text-sm sm:text-base lg:text-lg mb-4 lg:mb-6 text-white font-montserrat" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>Ketika air menyembur dan membuat Danau Toba, kita ingin membuat sebuah peristiwa (event) di halaman web untuk menanganinya. Atribut HTML apa yang tepat digunakan untuk menangani sebuah klik (misalnya, saat pengguna menekan tombol "Tenggelam")?</p>
              
              <div className="flex gap-4 lg:gap-6 items-stretch">
                {/* Answer Options - Full Width */}
                <div className="w-full space-y-4 lg:space-y-7">
                  {['onclick', 'onload', 'onchange'].map((option, index) => (
                    <button 
                      key={index}
                      onClick={() => handleAnswerSelect('section-7', option)}
                      className={`w-full font-medium py-4 lg:py-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm lg:text-base ${getAnswerButtonStyle('section-7', option)}`}
                      style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Final */}
      <section 
        id="section-8"
        className="quiz-section min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end relative transition-all duration-1000 pt-20 sm:pt-24 md:pt-28 lg:pt-0 py-8 lg:py-0"
        style={{ backgroundImage: `url(${Quiz8})` }}
      >
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000"></div>
        <div className="relative z-10 p-4 sm:p-6 lg:p-8 pb-8 lg:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className={` rounded-2xl text-white transition-all duration-1000 transform ${
              visibleSections.has('section-8') ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                <p className="text-sm sm:text-base lg:text-lg xl:text-2xl leading-relaxed text-center text-white font-montserrat font-medium italic px-4" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7), 1px 1px 2px rgba(0,0,0,0.8)'}}>
                  Cerita Legenda Danau Toba mengajarkan pentingnya menepati janji, mematuhi orang tua, menghormati hak orang lain, dan mengendalikan amarah, seperti ditunjukkan oleh perjalanan Toba dan Samosir yang berujung pada pembentukan Danau Toba. Dengan coding, nilai-nilai ini dapat diwujudkan melalui aplikasi untuk pelestarian lingkungan dan budaya, menciptakan dampak positif untuk masa depan.
                </p>
              <div className="mt-6 lg:mt-8 text-center">
                <Link
                    to="/"
                    className="group inline-block px-8 sm:px-12 lg:px-14 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/40 transition-all duration-300 hover:scale-105 relative overflow-hidden text-sm sm:text-base"
                    >
                    <span className="relative z-10">Kembali ke Beranda</span>
                    <div className="absolute inset-0 bg-black/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;