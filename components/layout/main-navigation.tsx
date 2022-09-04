import React from 'react';
import styles from './main-navigation.module.css';
import Link from 'next/link';

export const MainNavigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <a>
          <div className={styles.logo}>React Meetups</div>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
