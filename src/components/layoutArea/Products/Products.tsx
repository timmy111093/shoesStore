import React, { FC } from 'react';
import styles from './Products.module.scss';
import nikeImage from '../../../images/nike.webp';
import converseImage from '../../../images/converse.jpeg';
import jordanImage from '../../../images/jordan-1.jpeg';
import secondJordanImage from '../../../images/jordan-1 blue.jpeg';
import yeezyImage from '../../../images/yeezy.webp';
import adidasImage from '../../../images/adidas.jpeg';



interface ProductsProps {}

const Products: FC<ProductsProps> = () => {

  return(
    <div className={styles.Products}>

     <h3>מוצרים:</h3>

     <div className='imgContainer'>
     <img src={converseImage} alt="converse" />
     <img src={nikeImage} alt="nike" />
     <img src={adidasImage} alt="adidas" />
     <img src={yeezyImage} alt="yeezy" />
     <img src={jordanImage} alt="jordan-1" />
     <img src={secondJordanImage} alt="jordan-obsidian" />
     </div>
     </div>
 );

}

export default Products;


