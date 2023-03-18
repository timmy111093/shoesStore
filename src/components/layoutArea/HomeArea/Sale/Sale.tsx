import React, { FC } from 'react';
import styles from './Sale.module.scss';

interface SaleProps {}

const Sale: FC<SaleProps> = () => {

const date = new Date();
const today = date.getDate();
const displayDiscount = () => {

  if(today === 1){
    return <span>today 25% off!!!</span>
  }
}
return (
  <div className={styles.Sale}>
    <p>{displayDiscount()}</p>
  </div>
);
}

export default Sale;
