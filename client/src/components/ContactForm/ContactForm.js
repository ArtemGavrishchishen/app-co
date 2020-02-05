import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contact}>
          If you need custom services or Need more? <span>Contact us</span>
        </div>
        <div className={styles.subscribe}>
          <form className={styles.form}>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
