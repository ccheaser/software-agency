// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Integrations from '../components/Integrations';
import Services from '../components/Services';
import CompanyInfo from '../components/CompanyInfo';
import CloudSolutions from '../components/CloudSolutions';


const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Integrations />
      <Services />
      <CompanyInfo />
      <CloudSolutions />

    </main>
  );
};

export default Home;