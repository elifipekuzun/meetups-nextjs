import React from 'react';
import { Card } from '../ui/Card';
import styles from './meetup-item.module.css';
import { IMeetup } from '../../lib/models/Meetup';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const MeetupItem: React.FC<IMeetup> = ({
  image,
  title,
  address,
  id,
}) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image src={image} alt={title} width={700} height={400} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};
