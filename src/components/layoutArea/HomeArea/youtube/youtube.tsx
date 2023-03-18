import React, { FC } from 'react';
import styles from './youtube.module.scss';

interface YoutubeProps {}

const Youtube: FC<YoutubeProps> = () => {



  return(
    <div className={styles.Youtube}>
<iframe width="100%" height="355" src="https://www.youtube.com/embed/dUgfK7opb0E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  );
}

export default Youtube;
