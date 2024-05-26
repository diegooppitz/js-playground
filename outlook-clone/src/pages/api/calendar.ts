import { NextApiRequest, NextApiResponse } from 'next';
import { EventDataTypes } from '@/types';

let eventsData: EventDataTypes[] = [
  {
    eventTitle: 'Planning Meeting',
    eventDescription: '',
    startDate: '2024-05-29',
    endDate: '2024-05-29',
    startTime: '13:30',
    endTime: '14:00',
    allDay: false,
    eventId: 0,
  },
];

export default async function calendar(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    console.log("GET - events data", eventsData);
    try {
      return res.status(200).json(eventsData);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else if (req.method === 'POST') {
    try {
      let newEventData = req.body;
      newEventData.eventId = eventsData.length;
      eventsData.push(newEventData);

      console.log('POST - adding event:', eventsData);
      return res.status(201).json(newEventData);
    } catch (error) {
      console.error('Error handling POST request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
