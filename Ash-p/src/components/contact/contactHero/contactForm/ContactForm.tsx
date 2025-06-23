import React, { useState } from 'react';
import styles from './contactForm.module.scss';
import right from "../../../../assets/buttons/right-arrow.svg"
import content from './contactFormContent';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.topRow}>
        <span className={styles.fromLabel}>{content.fromLabel}</span>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder={content.namePlaceholder}
          value={form.name}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder={content.emailPlaceholder}
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder={content.numberPlaceholder}
          value={form.number}
          onChange={handleChange}
        />
      </div>
      <div className={styles.messageSection}>
        <label className={styles.messageLabel}>{content.messageLabel}</label>
        <textarea
          className={styles.textarea}
          name="message"
          placeholder={content.messagePlaceholder}
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.sendButton} type="submit">
          {content.sendButton}
          <div className={styles.arrow}><img src={right} alt="" /></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;