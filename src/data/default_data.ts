import { DbSchema } from 'src/models/DbSchema';

export const data: DbSchema[] = [
  {
    id: 0,
    name: '1h de spa en Hotel Botánico',
    description: 'Disfruta de una hora de spa libre en el hotel botánico, Puerto de la cruz',
    price: 75,
    img: [
      'http://localhost:3000/botanico1.jpg',
      'http://localhost:3000/botanico2.jpg',
      'http://localhost:3000/botanico3.jpg',
      'http://localhost:3000/botanico4.jpg',
      'http://localhost:3000/botanico5.jpg',
    ],
    availableHours: [
      {
        start: '2020-03-13T10:00:00',
        end: '2020-03-13T11:00:00',
      },
      {
        start: '2020-03-13T14:00:00',
        end: '2020-03-13T15:00:00',
      },
      {
        start: '2020-03-13T16:00:00',
        end: '2020-03-13T17:00:00',
      },
      {
        start: '2020-03-13T18:00:00',
        end: '2020-03-13T19:00:00',
      },
    ],
  },
  {
    id: 1,
    name: 'Masaje facial en Spa la Quinta',
    description: 'Disfruta de un maravilloso masaje facial en el spa La Quinta, Santa Úrsula',
    price: 30,
    img: [
      'http://localhost:3000/laquinta1.jpg',
      'http://localhost:3000/laquinta2.jpg',
    ],
    availableHours: [
      {
        start: '2020-03-13T11:00:00',
        end: '2020-03-13T11:30:00',
      },
      {
        start: '2020-03-13T13:00:00',
        end: '2020-03-13T13:30:00',
      },
      {
        start: '2020-03-13T13:30:00',
        end: '2020-03-13T14:00:00',
      },
    ],
  },
];
