// types.ts
export type Subscription = {
  id: string;
  name: string;
  icon: string;
  billingCycle: string;
  cycleDay: number;
  amount: number;
  status?: "active" | "pending" | "overdue";
  iconBgColor: string;
};

export const subscriptionData: Subscription[] = [
  {
    id: "1",
    name: "Spark Electric Solutions",
    icon: "⚡",
    billingCycle: "Monthly",
    cycleDay: 2,
    amount: 100.0,
    status: "active",
    iconBgColor: "bg-red-100",
  },
  {
    id: "2",
    name: "Serenity Spa & Wellness",
    icon: "🌟",
    billingCycle: "Monthly",
    cycleDay: 3,
    amount: 30.0,
    status: "active",
    iconBgColor: "bg-orange-100",
  },
  {
    id: "3",
    name: "Elevate Education",
    icon: "📚",
    billingCycle: "Monthly",
    cycleDay: 4,
    amount: 50.0,
    status: "active",
    iconBgColor: "bg-teal-100",
  },
  {
    id: "4",
    name: "Pixel Playground",
    icon: "🎮",
    billingCycle: "Monthly",
    cycleDay: 11,
    amount: 10.0,
    status: "active",
    iconBgColor: "bg-purple-100",
  },
  {
    id: "5",
    name: "Nimbus Data Storage",
    icon: "💾",
    billingCycle: "Monthly",
    cycleDay: 21,
    amount: 8.99,
    status: "overdue",
    iconBgColor: "bg-amber-100",
  },
  {
    id: "6",
    name: "ByteWise",
    icon: "📱",
    billingCycle: "Monthly",
    cycleDay: 23,
    amount: 49.99,
    status: "overdue",
    iconBgColor: "bg-violet-100",
  },
  {
    id: "7",
    name: "EcoFuel Energy",
    icon: "🌱",
    billingCycle: "Monthly",
    cycleDay: 29,
    amount: 35.0,
    iconBgColor: "bg-emerald-100",
  },
  {
    id: "8",
    name: "Aqua Flow Utilities",
    icon: "💧",
    billingCycle: "Monthly",
    cycleDay: 30,
    amount: 100.0,
    iconBgColor: "bg-blue-100",
  },
];
