export interface IMeetup {
  id: string;
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

export const DUMMY_LIST: IMeetup[] = [
  {
    id: 'm1',
    title: 'First',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1920px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the first meetup!',
  },
  {
    id: 'm2',
    title: 'Second',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1920px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the second meetup!',
  },
];
