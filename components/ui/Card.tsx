import React, { PropsWithChildren } from 'react';
import styles from './Card.module.css';

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
