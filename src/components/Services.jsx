// src/components/ServicesPage.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Server, Shield, Database, Save, Network } from 'lucide-react';

const technologies = [
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
  { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg' },
];

const Feature = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800/40 backdrop-blur-sm rounded-lg p-3 flex items-start space-x-2 hover:bg-gray-800/60 transition-all duration-300">
    <div className="text-blue-400 shrink-0">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <h4 className="text-white text-xs font-medium mb-0.5 font-serif">{title}</h4>
      <p className="text-gray-400 text-xs font-serif">{description}</p>
    </div>
  </div>
);

const TechIcon = ({ tech, style }) => (
  <div 
    className="bg-gray-900/90 aspect-square rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-200 w-10 h-10"
    style={{
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      ...style
    }}
  >
    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
  </div>
);

const ServiceCard = ({ number, title, description, isQuality = false, features = [] }) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-duration="1000" 
      className="w-full max-w-6xl mx-auto h-[480px] relative rounded-lg p-8 mb-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.8) 100%)',
        border: '1px solid transparent',
        borderImage: 'linear-gradient(45deg, rgba(59,130,246,0.5), transparent) 1'
      }}
    >
      <div className="flex justify-between">
        <div className="w-1/2">
          <span className="text-6xl text-blue-300/80 font-light font-serif">{number}</span>
          <h2 className="text-3xl text-white font-medium mt-4 mb-4 font-serif">{title}</h2>
          <p className="text-gray-400 mb-6 max-w-xl font-serif">{description}</p>
          <button className="bg-transparent border border-green-500 text-green-500 px-6 py-2 rounded-full flex items-center hover:bg-green-500/10 transition-colors duration-300 font-serif">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            BİZİMLE İLETİŞİME GEÇİN
          </button>
        </div>
        
        {isQuality ? (
          <div className="w-2/5">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6"
                 style={{
                   background: 'linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 100%)'
                 }}>
              <h3 className="text-white text-xl mb-3 font-serif">Kalite Odaklı Yaklaşım</h3>
              <p className="text-gray-400 text-sm mb-6 font-serif">
                Geri bildirim ve yinelemelerle uygulamamızı sürekli geliştiriyoruz; çalışmalarımız, en son teknolojiyi temel alarak yürütülmektedir.
              </p>
              <div className="relative h-48">
                {technologies.slice(0, 16).map((tech, index) => {
                  const positions = [
                    { transform: 'translate(0px, -8px)' },
                    { transform: 'translate(12px, 4px)' },
                    { transform: 'translate(-8px, -12px)' },
                    { transform: 'translate(16px, 8px)' },
                    { transform: 'translate(-12px, -4px)' },
                    { transform: 'translate(8px, 12px)' },
                    { transform: 'translate(-16px, -16px)' },
                    { transform: 'translate(20px, 16px)' },
                    { transform: 'translate(-20px, 0px)' },
                    { transform: 'translate(24px, -8px)' },
                    { transform: 'translate(-24px, 4px)' },
                    { transform: 'translate(28px, -12px)' },
                    { transform: 'translate(-28px, 8px)' },
                    { transform: 'translate(32px, -4px)' },
                    { transform: 'translate(-32px, 12px)' },
                    { transform: 'translate(36px, -8px)' },
                  ];
                  
                  return (
                    <div key={index} className="inline-block m-1" style={positions[index]}>
                      <TechIcon tech={tech} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-2/5">
            <div className="grid grid-cols-1 gap-2">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const networkFeatures = [
    {
      icon: Server,
      title: "Sistem Odası Yönetim Çözümlerimiz",
      description: "Uzaktan erişim ve kontrol sağlayan akıllı sistem odası çözümleri sunuyoruz."
    },
    {
      icon: Shield,
      title: "Güvenlik Çözümlerimiz",
      description: "Veri güvenliği artıran modern çözümler sağlıyoruz."
    },
    {
      icon: Database,
      title: "Veri Merkezi Çözümlerimiz",
      description: "Optimize sistem odaları ile kesintisiz iş akışı sunuyoruz."
    },
    {
      icon: Save,
      title: "Yedekleme ve Kurtarma Çözümlerimiz",
      description: "Kritik veriler için tam koruma sağlıyoruz."
    },
    {
      icon: Network,
      title: "Network Altyapı Çözümlerimiz",
      description: "Hızlı ve güvenli ağ altyapısını kuruyoruz."
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 data-aos="fade-down" className="text-center text-gray-400 mb-2 font-serif">HİZMETLERİMİZ</h1>
      <h2 data-aos="fade-down" data-aos-delay="100" className="text-center text-5xl lg:text-6xl mb-12 font-serif">
        <span className="text-white">Sadece bir Yazılım Ortağı değil,</span>
        <br />
        <span className="text-blue-400">Kapsamlı bir Çözüm Sunuyoruz</span>
      </h2>
      
      <ServiceCard
        number="1"
        title="Yazılım Geliştirme"
        description="Mobil uygulama geliştirme, web tabanlı yönetim sistemleri ve özel yazılım çözümleri dahil olmak üzere, işletmenizin ihtiyaçlarına yönelik her türlü yazılım çözümünü sağlıyoruz."
        isQuality={true}
      />
      
      <ServiceCard
        number="2"
        title="Sistem ve Network"
        description="Şirketinizin network altyapısından sistem odalarının kurulumuna kadar tüm donanım ihtiyaçlarını karşılıyor, sıfırdan kurulumdan devreye almaya kadar her aşamada eksiksiz destek sağlıyoruz."
        features={networkFeatures}
      />
    </div>
  );
};

export default ServicesPage;
