import React, { FC, ReactNode } from 'react';
import styles from './Brands.module.scss';

interface BrandsProps {}

const Brands: FC<BrandsProps> = () => {


  const brandsList = [
    {brand: 'Nike', id: 17195},
    {brand: 'Puma', id: 19395},
    {brand: 'Adidas', id: 17235}
  ]
  const jsx_brands = brandsList.map((item)=>{
    const {brand,id} = item;
    return <div>שם היצרן: {brand}, מק״ט יצרן:{id}<br/> </div>
  })

  return (
    <div className={styles.Brands}>
      {jsx_brands}
    </div>
  );
}

export default Brands;
