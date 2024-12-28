// src/components/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const achievements = [
    {
      name: "Yazılım Projeleri",
      role: "BAŞARI ORANI",
      metric: "98%",
      description: "TAMAMLANMA ORANI",
      bgColor: "bg-white"
    },
    {
      name: "Müşteri Memnuniyeti",
      role: "HİZMET KALİTESİ",
      metric: "95%+",
      description: "MEMNUNİYET ORANI",
      bgColor: "bg-white"
    },
    {
      name: "Proje Sayısı",
      role: "TOPLAM PROJE",
      metric: "500+",
      description: "TAMAMLANAN PROJE",
      bgColor: "bg-white"
    },
    {
      name: "Teknik Destek",
      role: "ÇÖZÜM SÜRESİ",
      metric: "24/7",
      description: "TEKNİK DESTEK",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Ana arka plan */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#04051b]" />
      
      {/* Eğimli beyaz arka plan */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/3 bg-[#0d0f3d] transform -skew-y-6 origin-left translate-y-1/2"
        style={{ zIndex: 3 }}
      />

      {/* Ana içerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-52 pb-32">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Sol Kısım */}
          <div className="lg:w-1/2 text-white">
            <h1 className="text-5xl lg:text-6xl font-serif mb-8">
              Dijital Dönüşümünüzü Bizimle Başlatın
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Modern yazılım çözümleri, profesyonel danışmanlık hizmetleri ve yenilikçi teknolojilerle işletmenizi geleceğe taşıyoruz. Size özel çözümler için hemen teklif alın.
            </p>
            
            {/* Teklif Formu */}
            <div className="flex items-center max-w-md bg-white rounded-full p-1">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-grow px-4 py-2 rounded-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-[#5d43d0] text-white px-6 py-2 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#4e37b0] transition-colors">
                Teklif Al
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Sağ Kısım - Başarı İstatistikleri */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${achievement.bgColor} p-6 rounded-2xl relative overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-lg`}
              >
                <div className="space-y-2">
                  <div className="text-[#5d43d0] text-3xl font-bold">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {achievement.description}
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-medium text-gray-800">
                      {achievement.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-56 flex justify-center"> {/* mt-32 ile yukarıdan boşluk eklendi */}
  <div className="grid grid-cols-3 gap-16"> {/* gap-16 ile kutular arası boşluk arttırıldı */}
    {/* Sol Kutu */}
    <div className="border-4 border-white p-12 w-[400px] h-[250px] flex flex-col items-start rounded-tl-3xl  bg-white/5 font-serif"> {/* w-[400px] h-[250px] ile boyutlar büyütüldü, p-12 ile padding arttırıldı */}
      <div className="text-4xl font-bold text-white leading-tight tracking-wide text-left">12+ leads</div> {/* text-4xl ile başlık boyutu büyütüldü */}
      <p className="text-lg text-white mt-4 text-left">generated daily by each Leadpages user, on average</p> {/* text-lg ve mt-4 ile açıklama boyutu ve boşluğu arttırıldı */}
    </div>
    {/* Orta Kutu */}
    <div className="border-4 border-white p-12 w-[400px] h-[250px] flex flex-col items-start bg-white/5 font-serif"> {/* w-[400px] h-[250px] ile boyutlar büyütüldü, p-12 ile padding arttırıldı */}
      <div className="text-4xl font-bold text-white leading-tight tracking-wide text-left">5x more conversions</div> {/* text-4xl ile başlık boyutu büyütüldü */}
      <p className="text-lg text-white mt-4 text-left">than the industry average</p> {/* text-lg ve mt-4 ile açıklama boyutu ve boşluğu arttırıldı */}
    </div>
    {/* Sağ Kutu */}
    <div className="border-4 border-white p-12 w-[400px] h-[250px] flex flex-col items-start rounded-tr-4xl rounded-br-3xl bg-white/5 font-serif"> {/* w-[400px] h-[250px] ile boyutlar büyütüldü, p-12 ile padding arttırıldı */}
      <div className="text-4xl font-bold text-white leading-tight tracking-wide text-left">270k+ businesses</div> {/* text-4xl ile başlık boyutu büyütüldü */}
      <p className="text-lg text-white mt-4 text-left">launched on Leadpages</p> {/* text-lg ve mt-4 ile açıklama boyutu ve boşluğu arttırıldı */}
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Hero;