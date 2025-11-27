import { Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      period: "1960'lar",
      description:
        "Eski kerpiç evlerin ve hayvancılığın ağırlıkta olduğu dönem. Elektrik, yol ve ulaşım imkânları sınırlıdır.",
      id: 'timeline-1960s',
    },
    {
      period: "1980'ler",
      description:
        "Yurt içi ve yurt dışına göçlerin arttığı, köyden şehirlere çalışmaya gidilen yıllar.",
      id: 'timeline-1980s',
    },
    {
      period: "2000'ler",
      description:
        "Telefon, internet ve yeni yolların yapılmasıyla iletişimin hızlandığı dönem.",
      id: 'timeline-2000s',
    },
    {
      period: "Günümüz",
      description:
        "Yeni evler, yenilenen yollar, araçların artması ve gurbette yaşayan Mahmatlılıların köyle bağını koruduğu dönem.",
      id: 'timeline-today',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const timelineElements = timelineData.map(item =>
        document.getElementById(item.id)
      );

      let closestIndex = 0;
      let closestDistance = Infinity;

      timelineElements.forEach((element, index) => {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 2);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="gecmisten-bugune" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-2">
          Geçmişten Bugüne
        </h2>
        <p className="text-center text-gray-600 mb-4">Mahmatlı'nın Zaman İçindeki Değişimi</p>
        <div className="w-20 h-1 bg-[#1B3400] mx-auto mb-10 sm:mb-14"></div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

          <div className="space-y-8 sm:space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                id={item.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-gray-50 rounded-lg p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3 md:justify-end">
                      <Calendar className="text-[#1B3400] mr-2" size={20} />
                      <h3 className="text-xl font-bold text-[#1B3400]">{item.period}</h3>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div
                  className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-10 transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-[#1B3400] scale-125'
                      : 'bg-gray-300 scale-100'
                  }`}
                ></div>

                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-14 bg-stone-50 rounded-xl p-6 sm:p-8 text-center">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Bu site, Mahmatlı Köyü'nün dününü ve bugününü kayıt altına alarak gelecek nesillere aktarmak için
            hazırlanmıştır.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
