import React, { FC } from 'react';
import styles from './About.module.scss';

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className={styles.About}>
    <h3>מי אנחנו?</h3>
    <p>חנות הנעליים המובילה באיזור השפלה!</p>
    <p>תוכלו לבקר אותנו ברחוב אחד העם 123 ברחובות</p>
    <p>או ליצור קשר בטלפון <b>08-9491991</b></p>

  </div>
);

export default About;
