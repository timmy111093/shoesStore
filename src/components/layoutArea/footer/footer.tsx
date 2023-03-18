import React, { FC } from 'react';
import styles from './footer.module.scss';

interface FooterProps {}

const getName = () => {
  alert('תמיר אלמקייס');
}

const Footer: FC<FooterProps> = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return(
    <footer onClick={getName} className={styles.Footer}>
      <p>כל הזכויות שמורות &copy; תמיר אלמקייס {currentYear} </p>
    </footer>
  );
}

export default Footer;
