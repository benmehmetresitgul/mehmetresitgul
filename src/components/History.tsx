import { BookOpen } from 'lucide-react';

const History = () => {
  return (
    <section id="tarihce" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="text-[#1B3400] mr-3" size={36} />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tarihçe</h2>
        </div>
        <div className="w-20 h-1 bg-[#1B3400] mx-auto mb-8 sm:mb-12"></div>

        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10">
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
            Mahmatlı Köyü'nün geçmişi sözlü anlatımlara ve aile büyüklerinin aktardığı hikâyelere
            dayanmaktadır. Köyün kuruluşu, çevredeki su kaynakları ve tarıma elverişli araziler etrafında
            şekillenmiştir. Yıllar içinde birçok hemşerimiz eğitim, iş ve farklı sebeplerle büyük şehirlere ve
            yurt dışına gitse de köy ile olan bağlar kopmamış; bayramlarda, düğünlerde ve yaz aylarında Mahmatlı
            yeniden kalabalıklaşmaya devam etmiştir.
          </p>

          <div className="bg-gray-50 border-l-4 border-[#1B3400] p-4 sm:p-6 rounded-r-lg">
            <p className="text-gray-700 text-sm sm:text-base italic">
              Bu bölüm, köyümüzün gerçek tarihî bilgileri ve büyüklerimizin anlattığı hatıralarla zamanla
              güncellenecektir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
