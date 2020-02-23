import React from 'react';
import AppHeader from '../../components/AppHeader';
import BannerSection from '../../components/BannerSection';
import OurWorkSection from '../../components/OurWorkSection';
import CallSection from '../../components/CallSection';
import PricingSection from '../../components/PricingSection';
import ContactForm from '../../components/ContactForm';
import MainFooter from '../../components/MainFooter';

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <main>
        <BannerSection />
        <OurWorkSection />
        <CallSection />
        <PricingSection />
        <ContactForm />
      </main>
      <MainFooter />
    </>
  );
};

export default MainPage;
