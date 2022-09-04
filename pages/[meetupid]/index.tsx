import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MeetupDetail } from '../../components/meetups/meetup-detail';
import { MeetsupProps, DUMMY_LIST } from '../../lib/models/Meetup';

interface Params extends ParsedUrlQuery {
  meetupid: string;
}

const MeetupDetailPage: NextPage<MeetsupProps> = ({ meetup }) => {
  return (
    <>
      <MeetupDetail meetup={meetup} />
    </>
  );
};

export const getStaticProps: GetStaticProps<MeetsupProps, Params> = (
  context
) => {
  if (!context.params) {
    return { notFound: true };
  }
  const { meetupid } = context.params;
  const meetup = DUMMY_LIST.find((m) => m.id === meetupid);
  if (!meetup) {
    return { notFound: true };
  }
  return {
    props: {
      meetup,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = new Array(DUMMY_LIST.length).fill(0).map((_, i) => {
    return {
      params: { meetupid: DUMMY_LIST[i].id },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export default MeetupDetailPage;
