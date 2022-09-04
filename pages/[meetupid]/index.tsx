import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MeetupDetail } from '../../components/meetups/meetup-detail';
import { MeetsupProps } from '../../lib/models/Meetup';
import { getMeetupDetail, getAllMeetups } from '../../lib/db';
import Head from 'next/head';

interface Params extends ParsedUrlQuery {
  meetupid: string;
}

const MeetupDetailPage: NextPage<MeetsupProps> = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail meetup={meetup} />
    </>
  );
};

export const getStaticProps: GetStaticProps<MeetsupProps, Params> = async (
  context
) => {
  if (!context.params) {
    return { notFound: true };
  }
  const { meetupid } = context.params;
  const meetup = await getMeetupDetail(meetupid);

  if (!meetup) {
    return { notFound: true };
  }
  const updatedMeetup = { ...meetup, _id: meetup._id.toString() };

  return {
    props: {
      meetup: updatedMeetup,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const allMeetups = await getAllMeetups();

  if (!allMeetups) {
    return { paths: [], fallback: 'blocking' };
  }

  const paths = new Array(allMeetups.length).fill(0).map((_, i) => {
    return {
      params: { meetupid: allMeetups[i]._id.toString() },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export default MeetupDetailPage;
