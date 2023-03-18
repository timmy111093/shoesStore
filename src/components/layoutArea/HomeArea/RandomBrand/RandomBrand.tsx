import React, { FC,useState,useEffect } from 'react';
import styles from './RandomBrand.module.scss';

interface RandomBrandProps {
}

const RandomBrand: FC<RandomBrandProps> = () => {
  const brands = ['nike', 'adidas', 'Air Jordan', 'yeezy', 'converse'];
  let [brand,setBrand] = useState('');

  useEffect(() => {
    const id = setInterval(() => {
      const randBrand = Math.floor(Math.random() * brands.length);
      setBrand(() => {
        return brand = brands[randBrand];
      })
      console.log(brands[randBrand]);
       
    },2000);
 
    return () => {
      clearInterval(id);
    }
  });

  



  return(
    <div className={styles.RandomBrand}>
      <p className='bg-secondary'>{brand}</p>
    </div>
  );
  
}

export default RandomBrand;
