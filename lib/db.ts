import { MongoClient, ObjectId } from 'mongodb';
import { IMeetup } from './models/Meetup';

const mongoUrl =
  'mongodb+srv://elifipek:588647elka@cluster0.bmoow.mongodb.net/meetupsDB?retryWrites=true&w=majority';

export const getClient = async (): Promise<MongoClient> => {
  const client = await MongoClient.connect(mongoUrl);
  return client;
};

export const getAllMeetups = async (): Promise<IMeetup[] | undefined> => {
  try {
    const client = await getClient();
    const allMeetups = (await client
      .db()
      .collection('meetups')
      .find()
      .toArray()) as IMeetup[];
    client.close();
    return allMeetups;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getMeetupDetail = async (
  meetupid: string
): Promise<IMeetup | undefined> => {
  try {
    const client = await getClient();
    const meetup = (await client
      .db()
      .collection('meetups')
      .findOne({ _id: new ObjectId(meetupid) })) as IMeetup;
    client.close();
    return meetup;
  } catch (error) {
    console.log(error);
    return;
  }
};
