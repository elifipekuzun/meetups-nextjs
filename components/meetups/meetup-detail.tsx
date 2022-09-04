import React from 'react';
import Image from 'next/image';
import { MeetsupProps } from '../../lib/models/Meetup';
import styles from './meetup-detail.module.css';

export const MeetupDetail: React.FC<MeetsupProps> = ({ meetup }) => {
  return (
    <section className={styles.detail}>
      <Image src={meetup.image} alt={meetup.title} width={600} height={400} />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
};
