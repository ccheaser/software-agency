// src/components/CompanyInfoLight.jsx
import React from 'react';

const CompanyInfoLight = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-32">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-sm text-gray-600 mb-2 font-serif">BİZ KİMİZ?</div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 font-serif">
            Son teknolojilerle hayalleri
            <br />
            <span className="text-blue-600">gerçeğe dönüştüren çözümler.</span>
          </h1>
        </div>

        {/* Partners Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Güçlü İş Ortaklıklarımız</h2>
          <p className="text-gray-600 mb-6 font-serif">
            Bizimle çalışan güçlü iş ortaklarımız sayesinde daha hızlı ve etkili çözümler üretiyoruz. 
            Kosgeb, Balıkesir Teknokent, Balıkesir Ticaret Odası, Türkiye İhracatçılar Meclisi ve 
            ISO 27001 gibi güvenilir partnerlerimizle büyük başarılar elde ediyoruz.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['TİM', 'KOSGEB', 'Balıkesir', 'Universal'].map((partner) => (
              <div key={partner} className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
                <div className="text-blue-600 font-bold font-serif">{partner}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision and HPE Partnership */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Vizyonumuz</h2>
            <p className="text-gray-600 mb-6 font-serif">
              Türkiye Yazılım olarak, yaratıcı düşüncenin ve teknoloji gücünün birleştiği noktada 
              yenilikçi çözümler sunmayı amaçlıyoruz. Her projede sınırları zorlayarak, markalarımızı 
              güçlü ve etkileyici dijital deneyimlerle hayata geçiriyoruz.
            </p>
            <img src="/api/placeholder/400/200" alt="Mobile apps showcase" className="rounded-lg w-full" />
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">HPE ile Stratejik Ortaklık</h2>
            <p className="text-gray-600 mb-6 font-serif">
              Şirketimiz, teknoloji sektöründeki lider firmalardan biri olan HPE ile stratejik partnerdir.
            </p>
            <div className="flex justify-end">
              <img src="/api/placeholder/200/60" alt="HPE logo" className="opacity-80" />
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                Güvenlik ve KVKK<br />
                Uyumuna Duyarlı Hizmet
              </h2>
              <p className="text-gray-600 font-serif">
                Türkiye Yazılım, kişisel veri güvenliğini en üst düzeyde tutarak KVKK'ya tam uyum sağlar. 
                Verilerinizi korumak ve güvenliğini sağlamak için en iyi güvenlik önlemleriyle çalışıyoruz.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/api/placeholder/200/200" alt="Security chip" className="opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoLight;
