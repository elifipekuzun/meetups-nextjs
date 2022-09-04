import { NextPage } from 'next';
import { NewMeetupForm } from '../../components/meetups/new-meetup-form';
import { IMeetup } from '../../lib/models/Meetup';
import { ResProps } from '../api/new-meetup';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NewMeetupFormPage: NextPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (newMeetupData: Partial<IMeetup>) => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(newMeetupData),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = (await res.json()) as ResProps;
    if (data.message !== 'Success!') {
      return;
    }
    router.replace('/');
  };

  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupFormPage;
