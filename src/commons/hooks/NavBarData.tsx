import {
  Budgets,
  BudgetsActive,
  Overview,
  OverviewActive,
  pots,
  potsActive,
  recurringBills,
  recurringBillsActive,
  transactions,
  transactionsActive,
} from '@/utility/images/imgExport';

export type NavLink = {
  icon: string;
  icon_Active: string;
  link: string;
  name: string;
};

export const NavLinks: NavLink[] = [
  {
    icon: Overview,
    icon_Active: OverviewActive,
    link: '/Overview',
    name: 'Overview',
  },
  {
    icon: transactions,
    icon_Active: transactionsActive,
    link: '/Transactions',
    name: 'Transactions',
  },
  {
    icon: Budgets,
    icon_Active: BudgetsActive,
    link: '/Budgets',
    name: 'Budgets',
  },
  {
    icon: pots,
    icon_Active: potsActive,
    link: '/Pots',
    name: 'Pots',
  },
  {
    icon: recurringBills,
    icon_Active: recurringBillsActive,
    link: '/Recurring-bills',
    name: 'Recurring bills',
  },
];
