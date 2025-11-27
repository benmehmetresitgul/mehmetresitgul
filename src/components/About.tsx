import { Home, Users, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Home,
      title: 'Sakin Yaşam',
      description: 'Dağların arasında, temiz havası ve huzurlu atmosferiyle',
    },
    {
      icon: Users,
      title: 'Güçlü Bağlar',
      description: 'Aile bağlarının ve komşuluk ilişkilerinin güçlü olduğu',
    },
    {
      icon: Leaf,
      title: 'Doğal Yaşam',
      description: 'Tarım, hayvancılık ve doğal ürünlerle geçim',
    },
  ];

  return (
    <section id="hakkinda" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Köyümüz Hakkında
        </h2>
        <div className="w-20 h-1 bg-[#1B3400] mx-auto mb-8 sm:mb-12"></div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 sm:mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#1B3400] rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Mahmatlı Köyü, Gümüşhane'nin Kelkit ilçesine bağlı; dağların arasında, temiz havası ve sakinliği ile
            öne çıkan bir Anadolu köyüdür. Yaz aylarında gurbetten dönen hemşerilerimizin gelişiyle hareketlenen,
            kışın ise daha sakin ve huzurlu bir atmosfere bürünen köyümüz; aile bağlarının ve komşuluk
            ilişkilerinin güçlü olduğu bir yerdir. Köy halkının geçim kaynağı ağırlıklı olarak tarım ve
            hayvancılıktır. Yaylaya çıkma kültürü, doğal ürünler, imece usulü yardımlaşma ve misafirperverlik
            hâlâ günlük hayatın önemli parçalarıdır.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
