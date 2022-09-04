import type { NextPage, GetStaticProps } from 'next';
import { MeetupList } from '../components/meetups/meetup-list';
import { DUMMY_LIST, MeetsupsProps } from '../lib/models/Meetup';

const HomePage: NextPage<MeetsupsProps> = ({ meetups }) => {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
};

export const getStaticProps: GetStaticProps<MeetsupsProps> = async () => {
  return {
    props: {
      meetups: DUMMY_LIST,
    },
    revalidate: 10,
  };
};

export default HomePage;
