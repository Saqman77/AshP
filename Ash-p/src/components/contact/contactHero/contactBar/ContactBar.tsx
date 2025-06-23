import React from "react";
import styles from "./contactBar.module.scss";
import { contactBarContent } from "./batContent";

const ContactBar: React.FC = () => {
  const { email, phone } = contactBarContent;

  // Copy email to clipboard handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className={styles.contactBar}>
      {/* Email Section */}
      <div className={styles.emailSection}>
        {/* TODO: Add email icon here */}
        <span className={styles.emailIcon}>{/* Email Icon */}</span>
        <span>{email}</span>
      </div>
      {/* Copy Button */}
      <button
        className={styles.copyButton}
        onClick={handleCopyEmail}
        aria-label="Copy email address"
      >
        {/* TODO: Add copy icon here */}
        <span>{/* Copy Icon */}</span>
      </button>
      {/* Phone Section */}
      <div className={styles.phoneSection}>
        <span className={styles.phoneIcon}>{/* Phone Icon */}</span>
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default ContactBar;
