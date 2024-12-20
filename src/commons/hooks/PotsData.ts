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
