import React, { FC } from 'react';
import styles from './footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className={styles.Footer}>
    Footer Component
  </footer>
);

export default Footer;
