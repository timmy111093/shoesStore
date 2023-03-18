import React, { FC } from 'react';
import styles from './Home.module.scss';
import Brands from '../Brands/Brands';
import ChangeTitle from '../Change_title/Change_title';
import ShoesCard from '../shoesCard/shoesCard';
import Youtube from '../youtube/youtube';
import RandomBrand from '../RandomBrand/RandomBrand';
import Sale from '../Sale/Sale';
import nikeImg from '../../../../images/table-images/nike-2.jpg';
import jordan1 from '../../../../images/jordan-1 blue.jpeg';
import yeezy from '../../../../images/yeezy.webp';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return(
    <main className={styles.Main}>
    <Sale />
    <RandomBrand/>
    <Youtube /><br />
    <table className='table table-hover table-striped table-dark'>
      <thead className='bg-secondary'>
        <td>מותג</td>
        <td>מידה</td>
        <td>מחיר</td>
        <td>תמונה</td>
      </thead>
      <tbody>
      <ShoesCard brand={'Adidas - Yeezy'} size={46} price={549} image={yeezy}/>
        <ShoesCard brand='Air Jordan' size={44} price={799} image={jordan1} />
        <ShoesCard brand={'Nike'} size={43} price={399} image={nikeImg}/>
      </tbody>
    </table>
    {/* <Brands/> */}
      <ChangeTitle />
    </main>
  );
}

export default Home;
