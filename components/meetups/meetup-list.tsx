import React from 'react';
import { MeetupItem } from './meetup-item';
import styles from './meetup-list.module.css';
import { MeetsupsProps } from '../../lib/models/Meetup';

export const MeetupList: React.FC<MeetsupsProps> = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup._id.toString()}
          _id={meetup._id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
