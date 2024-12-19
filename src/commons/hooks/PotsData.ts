export type Pots = {
  method: string;
  sum: number;
  procent: number;
  limit: number;
};

export const Potss: Pots[] = [
  {
    method: 'Savings',
    sum: 159.0,
    procent: 7.95,
    limit: 2000,
  },
  {
    method: 'Concert Ticket',
    sum: 110.0,
    procent: 73.3,
    limit: 150,
  },
  {
    method: 'Gift',
    sum: 40.0,
    procent: 66.6,
    limit: 60,
  },
  {
    method: 'New Laptop',
    sum: 10.0,
    procent: 1.0,
    limit: 1000,
  },
  {
    method: 'Holiday',
    sum: 531.0,
    procent: 36.8,
    limit: 1440,
  },
];
