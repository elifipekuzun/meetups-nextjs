import { Document, WithId, ObjectId } from 'mongodb';

interface Meetup extends Document {
  _id: string | ObjectId;
}

export interface IMeetup extends WithId<Meetup> {
  image: string;
  title: string;
  address: string;
  description: string;
}

export type MeetsupsProps = {
  meetups: IMeetup[];
};

export type MeetsupProps = {
  meetup: IMeetup;
};
