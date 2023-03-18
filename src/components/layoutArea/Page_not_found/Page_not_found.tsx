import React, { FC } from 'react';
import styles from './Page_not_found.module.scss';

interface PageNotFoundProps {}

const PageNotFound: FC<PageNotFoundProps> = () => (
  <div className={styles.PageNotFound}>
    <p>.........The Page You Looking For Doesn't Exist</p>
  </div>
);

export default PageNotFound;
