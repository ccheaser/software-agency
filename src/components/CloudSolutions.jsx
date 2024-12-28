// src/components/CloudSolutions.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './CloudSolutions.module.css'; // CSS Modules importu
import {
  LineChart,
  LayoutPanelLeft,
  Brush,
  Code2,
} from 'lucide-react';

/* Kart Bileşeni */
const Card = ({ title, icon, description }) => {
  // Fare hareketlerini yakalayan fonksiyon
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--xPos', `${x}px`);
    e.currentTarget.style.setProperty('--yPos', `${y}px`);
  };

  return (
    <div className="w-full p-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={`flex flex-col h-full rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 ${styles.cardHoverEffect}`}
        onMouseMove={handleMouseMove} // MouseMove olayı ekleniyor
      >
        <div className="flex items-center p-6 h-full">
          <div className="text-blue-400 text-3xl mr-4">
            {icon}
          </div>
          <div className="text-white flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold mb-2 font-serif">{title}</h3>
              <p className="text-gray-400 text-lg mb-4 font-serif">{description}</p>
            </div>
            <button className={`${styles.button} font-serif`}>
              Detayları Gör
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* CloudSolutions Bileşeni */
const CloudSolutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-8">
        {/* Sol Taraf: Metin ve Buton */}
        <div className={`${styles.textSection} w-full md:w-1/3 flex flex-col justify-center`} data-aos="fade-right">
          <h2 className={`${styles.title} text-4xl lg:text-6xl font-serif`}>
            Kurumsal  <br>
            </br>Ajans
          </h2>
          <p className={`${styles.description} text-gray-300 mt-4 font-serif`}>
            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
          </p>
          <p className={`${styles.description} text-gray-300 mt-2 font-serif`}>
            İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
          </p>
          <button className={`${styles.button} mt-6 font-serif`}>
            Detaylar
          </button>
        </div>

        {/* Sağ Taraf: Kartlar */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr" data-aos="fade-left">
          <Card
            title="Dijital Marka Danışmanlığı"
            icon={<LineChart />}
            description="Markanızın dijital dünyadaki yolculuğunda size rehberlik ediyoruz."
          />
          <Card
            title="Web Tasarım"
            icon={<LayoutPanelLeft />}
            description="Modern ve etkileyici web siteleri tasarlıyoruz."
          />
          <Card
            title="Prodüksiyon"
            icon={<Brush />}
            description="Yaratıcı ve özgün prodüksiyon hizmetleri sunuyoruz."
          />
          <Card
            title="Web Yazılım"
            icon={<Code2 />}
            description="İhtiyaçlarınıza özel web uygulamaları geliştiriyoruz."
          />
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;
