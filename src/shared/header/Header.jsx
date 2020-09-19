import React from 'react';
import styles from './header.less';

export const HeaderComponent = () => {
  return (
    <header>
      <h1 className={styles.example}>Reddit for our own!!!</h1>
    </header>
  );
};

export default HeaderComponent;
