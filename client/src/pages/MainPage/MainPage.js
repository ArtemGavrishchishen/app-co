import React from 'react';
import BannerSection from '../../components/BannerSection';
import OurWorkSection from '../../components/OurWorkSection';
import CallSection from '../../components/CallSection';
import PricingSection from '../../components/PricingSection';
import ContactForm from '../../components/ContactForm';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <div className={styles.main}>
        <BannerSection />
        <OurWorkSection />
        <CallSection />
        <PricingSection />
        <ContactForm />
      </div>
    </>
  );
};

export default MainPage;
