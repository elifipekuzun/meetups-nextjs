import type { NextPage, GetStaticProps } from 'next';
import { MeetupList } from '../components/meetups/meetup-list';
import { MeetsupsProps } from '../lib/models/Meetup';
import { getAllMeetups } from '../lib/db';
import Head from 'next/head';

const HomePage: NextPage<MeetsupsProps> = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps: GetStaticProps<MeetsupsProps> = async () => {
  const meetups = await getAllMeetups();
  if (!meetups) {
    return { notFound: true };
  }

  const updatedMeetups = meetups.map((meet) => {
    return { ...meet, _id: meet._id.toString() };
  });

  return {
    props: {
      meetups: updatedMeetups,
    },
    revalidate: 10,
  };
};

export default HomePage;
