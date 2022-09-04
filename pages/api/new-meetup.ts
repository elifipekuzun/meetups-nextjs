import { NextApiRequest, NextApiResponse } from 'next';
import { IMeetup } from '../../lib/models/Meetup';
import { getClient } from '../../lib/db';

export type ResProps = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResProps>
) {
  if (req.method !== 'POST') {
    return;
  }
  const { title, address, image, description } = req.body as IMeetup;

  if (!title || !address || !image || !description) {
    res.status(422).json({ message: 'You need to fill all the fields!' });
    return;
  }

  const client = await getClient();
  if (!client) {
    res.status(500).json({ message: 'Could not connect to database!' });
    return;
  }
  await client
    .db()
    .collection('meetups')
    .insertOne({ title, image, address, description });

  res.status(200).json({ message: 'Success!' });

  client.close();
}
