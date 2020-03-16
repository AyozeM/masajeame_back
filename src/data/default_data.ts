import { DbSchema } from 'src/models/DbSchema';
import { addDay } from 'src/utils/Date.utils';

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
        date: new Date().toISOString().split('T')[0],
        ranges: [
          {
            start: '10:00',
            end: '11:00',
          },
          {
            start: '14:00',
            end: '15:00',
          },
          {
            start: '16:00',
            end: '17:00',
          },
          {
            start: '18:00',
            end: '19:00',
          },
        ],
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
        date: addDay(new Date(), 1).toISOString().split('T')[0],
        ranges: [
          {
            start: '11:00',
            end: '11:30',
          },
          {
            start: '13:00',
            end: '13:30',
          },
          {
            start: '13:30',
            end: '14:00',
          },

        ],
      },
    ],
  },
  {
    id: 2,
    name: '2h de spa en Hotel Villa cortés',
    description: 'Disfruta de 2h de relax en el hotel Villa Cortés, Playa de las Américas',
    price: 50,
    img: [
      'http://localhost:3000/villacortes1.jpg',
      'http://localhost:3000/villacortes2.jpg',
      'http://localhost:3000/villacortes3.jpg',
      'http://localhost:3000/villacortes4.jpg',
    ],
    availableHours: [
      {
        date: addDay(new Date(), 1).toISOString().split('T')[0],
        ranges: [
          {
            start: '11:00',
            end: '11:30',
          },
          {
            start: '13:00',
            end: '13:30',
          },
          {
            start: '13:30',
            end: '14:00',
          },
        ],
      },
      {
        date: addDay(new Date(), 2).toISOString().split('T')[0],
        ranges: [
          {
            start: '10:00',
            end: '11:30',
          },
          {
            start: '13:00',
            end: '13:30',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Cocholaterapia en hotel Gara',
    description: 'Déjate mimar..., y llenarte de chocolate, en Arona',
    price: 120,
    img: [
      'http://localhost:3000/gara2.jpg',
      'http://localhost:3000/gara3.jpg',
    ],
    availableHours: [
      {
        date: new Date().toISOString().split('T')[0],
        ranges: [
          {
            start: '11:00',
            end: '12:30',
          },
        ],
      },
      {
        date: addDay(new Date(), 2).toISOString().split('T')[0],
        ranges: [
          {
            start: '12:00',
            end: '13:30',
          },
          {
            start: '16:00',
            end: '17:30',
          },
        ],
      },
    ],
  },
];
