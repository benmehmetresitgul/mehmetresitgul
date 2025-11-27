import { Mountain, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/daqysaygc/image/upload/v1764187061/mahmatli-koyu_tw4q12.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">

        <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 sm:p-10 md:p-12 mb-8 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>
            Mahmatlı Köyü'ne
            <br />
            <span className="text-white">Hoş Geldiniz</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>
            Gümüşhane'nin Kelkit ilçesine bağlı, doğası ve insanı ile tanınan küçük ama samimi bir köy: Mahmatlı.
            Hem köyde yaşayanlar hem de gurbetteki hemşerilerimiz için dijital bir buluşma noktası.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <button
            onClick={() => scrollToSection('#hakkinda')}
            className="w-full sm:w-auto px-8 py-3 bg-[#1B3400] text-white rounded-lg font-medium hover:bg-[#0f1f00] transition-colors shadow-lg hover:shadow-xl"
          >
            Köy Hakkında
          </button>
          <button
            onClick={() => scrollToSection('#galeri')}
            className="w-full sm:w-auto px-8 py-3 bg-white text-[#1B3400] border-2 border-[#1B3400] rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Galeriye Göz At
          </button>
        </div>

        <div className="mt-12 sm:mt-16">
          <button
            onClick={() => scrollToSection('#hakkinda')}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/60 hover:bg-white/80 transition-colors backdrop-blur-sm hover:shadow-lg animate-bounce"
            aria-label="Aşağıya kaydır"
          >
            <ChevronDown className="text-[#1B3400]" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
