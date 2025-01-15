import { user1, user2, user3 } from '@/utility/images/ImgExport';

export type BudgetType = {
  id: number;
  BudgetCategory: string;
  limit: number;
  enterMoney: number;
  color: string;
  procent: number;
  translations: {
    userImg: string;
    userName: string;
    translation: number;
    data: string;
  }[];
};

export const BudgetView: BudgetType[] = [
  {
    id: 1,
    BudgetCategory: 'Entertainment',
    color: '#277C78',
    enterMoney: 15.0,
    limit: 50.0,
    procent: 15,
    translations: [
      {
        userImg: user1,
        userName: 'James Thompson',
        translation: 5.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user3,
        userName: 'JPixel Playground',
        translation: 10.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user2,
        userName: 'Rina Sato',
        translation: 10.0,
        data: '13 Aug 2024',
      },
    ],
  },
  {
    id: 2,
    BudgetCategory: 'Bills',
    color: '#82C9D7',
    enterMoney: 150.0,
    limit: 750.0,
    procent: 35,

    translations: [
      {
        userImg: user2,
        userName: 'James Thompson',
        translation: 5.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user3,
        userName: 'JPixel Playground',
        translation: 10.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user1,
        userName: 'Rina Sato',
        translation: 30.0,
        data: '13 Aug 2024',
      },
    ],
  },
  {
    id: 3,
    BudgetCategory: 'Dining Out',
    color: '#F2CDAC',
    enterMoney: 133.0,
    limit: 75.0,
    procent: 17,

    translations: [
      {
        userImg: user1,
        userName: 'James Thompson',
        translation: 5.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user2,
        userName: 'JPixel Playground',
        translation: 10.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user3,
        userName: 'Rina Sato',
        translation: 10.0,
        data: '13 Aug 2024',
      },
    ],
  },
  {
    id: 4,
    BudgetCategory: 'Personal Case',
    color: '#626070',
    enterMoney: 40.0,
    limit: 100.0,
    procent: 7,
    translations: [
      {
        userImg: user1,
        userName: 'James Thompson',
        translation: 5.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user3,
        userName: 'JPixel Playground',
        translation: 10.0,
        data: '11 Aug 2024',
      },
      {
        userImg: user1,
        userName: 'Rina Sato',
        translation: 10.0,
        data: '13 Aug 2024',
      },
    ],
  },
];
