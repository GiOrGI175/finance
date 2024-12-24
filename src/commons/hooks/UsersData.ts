import {
  Emma,
  SavoryLogo,
  Liam,
  Sun,
  Daniel,
  UrbanLogo,
} from "@/utility/images/ImgExport";
type Users = {
  id: number;
  SenderName: string;
  Image: any;
  Category: string;
  TransDate: string;
  Amount: number;
};

const usersData: Users[] = [
  {
    id: 1,
    SenderName: "Emma Richardson",
    Image: Emma,
    Category: "General",
    TransDate: "19 Aug 2024",
    Amount: 75.50,
  },
  {
    id: 2,
    SenderName: "Savory Bites Bistro",
    Image: SavoryLogo,
    Category: "Dining Out",
    TransDate: "19 Aug 2024",
    Amount: -55.50
  },
  {
    id: 3,
    SenderName: "Daniel Carter",
    Image: Daniel,
    Category: "General",
    TransDate: "18 Aug 2024",
    Amount: -42.30
  },
  {
    id: 4,
    SenderName: "Sun Park",
    Image: Sun,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: +120.00
  },
  {
    id: 5,
    SenderName: "Urban Services Hub",
    Image: UrbanLogo,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: -65.00
  },
  {
    id: 6,

    SenderName: "Liam Hughes",
    Image: Liam,
    Category: "Groceries",
    TransDate: "15 Aug 2024",
    Amount: +65.75,
  },
  {
    id: 7,
    SenderName: "Emma Richardson",
    Image: Emma,
    Category: "General",
    TransDate: "19 Aug 2024",
    Amount: 75.50,
  },
  {
    id: 8,
    SenderName: "Savory Bites Bistro",
    Image: SavoryLogo,
    Category: "Dining Out",
    TransDate: "19 Aug 2024",
    Amount: -55.50
  },
  {
    id: 9,
    SenderName: "Daniel Carter",
    Image: Daniel,
    Category: "General",
    TransDate: "18 Aug 2024",
    Amount: -42.30
  },
  {
    id: 10,
    SenderName: "Sun Park",
    Image: Sun,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: +120.00
  },
  {
    id: 11,
    SenderName: "Urban Services Hub",
    Image: UrbanLogo,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: -65.00
  },
  {
    id: 12,
    SenderName: "Liam Hughes",
    Image: Liam,
    Category: "Groceries",
    TransDate: "15 Aug 2024",
    Amount: 65.75,
  },
];

export default usersData;
