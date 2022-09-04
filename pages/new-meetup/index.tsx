import { NextPage } from 'next';
import { NewMeetupForm } from '../../components/meetups/new-meetup-form';
import { IMeetup } from '../../lib/models/Meetup';

const NewMeetupFormPage: NextPage = () => {
  const addMeetupHandler = (newMeetupData: Partial<IMeetup>) => {};

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupFormPage;
