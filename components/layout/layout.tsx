import React, { PropsWithChildren } from 'react';
import { MainNavigation } from './main-navigation';
import styles from './layout.module.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
