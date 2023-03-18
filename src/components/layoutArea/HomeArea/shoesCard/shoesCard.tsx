import React, { FC, ReactNode } from 'react';
import styles from './shoesCard.module.scss';


interface ShoesCardProps {
  brand:string;
  size: number;
  price: number;
  image: any;
}

const ShoesCard: FC<ShoesCardProps> = ({brand,size,price,image}) => (

    <tr>
      <td>{brand}</td>
      <td>{size}</td>
      <td>{price} ₪</td>
      <td><img src={image} alt={'shoe'}/></td>
    </tr>

);

export default ShoesCard;
