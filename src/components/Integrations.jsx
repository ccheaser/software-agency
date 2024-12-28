// src/components/Integrations.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Integrations = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="uppercase text-gray-300 text-sm tracking-widest mb-8">
          LEADPAGES ENTEGRASYONLARI
        </div>
        <h2 className="text-5xl lg:text-6xl font-serif mb-8">
          Diğer Pazarlama<br />
          Uygulamalarınızla Uyumlu
        </h2>
        <p className="mt-3 text-xl text-gray-500 max-w-3xl mx-auto mb-16">
          Leadpages, leadlerinizi ve dönüşümlerinizi artırmak için ihtiyaç duyduğunuz her şeye sahip—ama teknoloji yığınınıza başka araçlar eklemek isterseniz, bununla da ilgili değiliz.
        </p>
        <a href="#" className="inline-block text-base font-medium text-white bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-lg">
          90+ Entegrasyon &gt;
        </a>
        <div className="mt-20 relative">
          <Swiper
            slidesPerView={5} // Tek seferde 5 slayt göster (İhtiyaca göre değiştirin)
            spaceBetween={30}
            loop={true}
            loopedSlides={10} // slayt sayınız 6 olsa bile 10 veya 12 gibi daha yüksek bir değer verin.
            autoplay={{
              delay: 1500, // Geçiş süresi (milisaniye)
              disableOnInteraction: false, // Kullanıcı etkileşime geçtiğinde durdurma
              pauseOnMouseEnter: true, // Fare üzerine gelince duraklat
            }}
            speed={200} // Geçiş hızı (milisaniye)
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex justify-center py-12 px-12 bg-gray-50 rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100">
                <img className="max-h-16" src="/goto-logo.svg" alt="GoTo Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center py-12 px-12 bg-gray-50 rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100">
                <img className="max-h-16" src="/google-adsense-logo.svg" alt="Google Adsense Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center py-12 px-12 bg-gray-50 rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100">
                <img className="max-h-16" src="/mailchimp-logo.svg" alt="Mailchimp Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center py-12 px-12 bg-gray-50 rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100">
                <img className="max-h-16" src="/stripe-logo.svg" alt="Stripe Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center py-12 px-12 bg-gray-50 rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100">
                <img className="max-h-16" src="/calendly-logo.svg" alt="Calendly Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center py-12 px-12 bg-gray-50 rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100">
                <img className="max-h-16" src="/hotjar-logo.svg" alt="Hotjar Logo" />
              </div>
            </SwiperSlide>
            {/* Gerekirse daha fazla SwiperSlide ekleyin */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
