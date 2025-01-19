import {
  circle_1,
  circle_2,
  circle_3,
  circle_4,
  circle_5,
} from '@/utility/images/ImgExport';

export type Pots = {
  id: number;
  method: string;
  sum: number;
  procent: number;
  limit: number;
  icon: string;
  color: string;
};

export const Potss: Pots[] = [
  {
    id: 1,
    method: 'Savings',
    sum: 159.0,
    procent: 7.95,
    limit: 2000,
    icon: circle_1,
    color: '#277C78',
  },
  {
    id: 2,
    method: 'Concert Ticket',
    sum: 110.0,
    procent: 73.3,
    limit: 150,
    icon: circle_2,
    color: '#626070',
  },
  {
    id: 3,
    method: 'Gift',
    sum: 40.0,
    procent: 66.6,
    limit: 60,
    icon: circle_3,
    color: '#82C9D7',
  },
  {
    id: 4,
    method: 'New Laptop',
    sum: 10.0,
    procent: 1.0,
    limit: 1000,
    icon: circle_4,
    color: '#F2CDAC',
  },
  {
    id: 5,
    method: 'Holiday',
    sum: 531.0,
    procent: 36.8,
    limit: 1440,
    icon: circle_5,
    color: '#826CB0',
  },
];

type optionsType = {
  id: number;
  color: string;
  value: string;
};

export const colorOptions: optionsType[] = [
  { id: 1, color: '#277C78', value: 'Green' },
  { id: 2, color: '#F2CDAC', value: 'Yellow' },
  { id: 3, color: '#82C9D7', value: 'Cyan' },
  { id: 4, color: '#626070', value: 'Navy' },
  { id: 5, color: '#C94736', value: 'Red' },
  { id: 5, color: '#826CB0', value: 'Purple' },
  { id: 6, color: '#597C7C', value: 'Turquoise' },
  { id: 7, color: '#93674F', value: 'Brown' },
  { id: 8, color: '#934F6F', value: 'Magenta' },
  { id: 9, color: '#3F82B2', value: 'Blue' },
  { id: 10, color: '#97A0AC', value: 'Navy Grey' },
  { id: 11, color: '#7F9161', value: 'Army Green' },
  { id: 12, color: '#826CB0', value: 'Pink' },
  { id: 13, color: '#BE6C49', value: 'Orange' },
];

export const options: optionsType[] = [
  { id: 1, color: '#277C78', value: 'Green' },
  { id: 2, color: '#F2CDAC', value: 'Yellow' },
  { id: 3, color: '#82C9D7', value: 'Cyan' },
  { id: 4, color: '#626070', value: 'Navy' },
  { id: 5, color: '#C94736', value: 'Red' },
  { id: 53, color: '#826CB0', value: 'Purple' },
  { id: 6, color: '#597C7C', value: 'Turquoise' },
  { id: 7, color: '#93674F', value: 'Brown' },
  { id: 8, color: '#934F6F', value: 'Magenta' },
  { id: 9, color: '#3F82B2', value: 'Blue' },
  { id: 10, color: '#97A0AC', value: 'Navy Grey' },
  { id: 11, color: '#7F9161', value: 'Army Green' },
  { id: 12, color: '#826CB0', value: 'Pink' },
  { id: 13, color: '#BE6C49', value: 'Orange' },
];
