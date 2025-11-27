import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const locationInfo = [
    { label: 'İl', value: 'Gümüşhane' },
    { label: 'İlçe', value: 'Kelkit' },
    { label: 'Köy', value: 'Mahmatlı' },
    { label: 'Ulaşım', value: 'Kara yolu ile, özel araç veya ilçe minibüsleri' },
  ];

  return (
    <section id="ulasim" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="text-[#1B3400] mr-3" size={36} />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ulaşım ve Konum</h2>
        </div>
        <div className="w-20 h-1 bg-[#1B3400] mx-auto mb-8 sm:mb-12"></div>

        <div className="bg-stone-50 rounded-xl shadow-md p-6 sm:p-8 md:p-10">
          <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
            Mahmatlı Köyü, Gümüşhane ilinin Kelkit ilçesine bağlıdır. İlçe merkezine kara yolu ile ulaşım
            sağlanır. Köyümüze gelmek isteyenler, önce Kelkit'e ulaşıp oradan köy yolunu takip edebilirler.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {locationInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-5 border border-gray-200 hover:border-[#1B3400] transition-colors"
              >
                <div className="flex items-start">
                  <Navigation className="text-[#1B3400] mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border-l-4 border-[#1B3400] p-4 sm:p-6 rounded-r-lg">
            <h3 className="font-semibold text-gray-900 mb-4 text-base sm:text-lg">Harita Konumu</h3>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '75%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4310.509156367356!2d39.524183490657585!3d40.014645058977024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407aad1c17141a85%3A0x76ce732fc8c1cdaa!2sMahmatl%C4%B1%20Cami!5e1!3m2!1str!2str!4v1763823997931!5m2!1str!2str"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahmatlı Köyü Harita Konumu"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
