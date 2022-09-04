import React, { FormEvent, useRef } from 'react';
import { Card } from '../ui/Card';
import styles from './new-meetup-form.module.css';
import { IMeetup } from '../../lib/models/Meetup';

export type NewMeetupFromProps = {
  onAddMeetup: (params: Partial<IMeetup>) => void;
};

export const NewMeetupForm: React.FC<NewMeetupFromProps> = ({
  onAddMeetup,
}) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const title = titleInputRef.current?.value;
    const image = imageInputRef.current?.value;
    const address = addressInputRef.current?.value;
    const description = descriptionInputRef.current?.value;

    if (!title || !image || !address || !description) {
      return;
    }

    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    onAddMeetup(newMeetup);
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
