import React, { useEffect } from 'react';

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.weatherwidget.io/js/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
              Hava Durumu
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-4 overflow-hidden">
            <a
              href="https://weatherwidget.io/en"
              className="weatherwidget-io"
              data-label_1="Mahmatlı"
              data-label_2="Hava Durumu"
              data-theme="pure"
              data-basecolor="3b82f6"
            >
              Mahmatlı Hava Durumu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
