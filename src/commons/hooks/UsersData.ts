import { Emma,SavoryLogo,Liam,Sun,Daniel, UrbanLogo } from "@/utility/images/ImgExport";
type Users = {
  SenderName: string;
  Image: any;
  Category: string;
  TransDate: string;
  Amount: string;
};

const usersData: Users[] = [
  {
    SenderName: "Emma Richardson",
    Image: Emma,
    Category: "General",
    TransDate: "19 Aug 2024",
    Amount: "+$75.50",
  },
  {
    SenderName: "Savory Bites Bistro",
    Image: SavoryLogo,
    Category: "Dining Out",
    TransDate: "19 Aug 2024",
    Amount: "-$55.50",
  },
  {
    SenderName: "Daniel Carter",
    Image: Daniel,
    Category: "General",
    TransDate: "18 Aug 2024",
    Amount: "-$42,30",
  },
  {
    SenderName: "Sun Park",
    Image: Sun,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: "+$120.00",
  },
  {
    SenderName: "Urban Services Hub",
    Image: UrbanLogo,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: "-$65.00",
  },
  {
    SenderName: "Liam Hughes",
    Image: Liam,
    Category: "Groceries",
    TransDate: "15 Aug 2024",
    Amount: "+$65.75",
  },
  {
    SenderName: "Emma Richardson",
    Image:Emma,
    Category: "General",
    TransDate: "19 Aug 2024",
    Amount: "+$75.50",
  },
  {
    SenderName: "Savory Bites Bistro",
    Image: SavoryLogo,
    Category: "Dining Out",
    TransDate: "19 Aug 2024",
    Amount: "-$55.50",
  },
  {
    SenderName: "Daniel Carter",
    Image: Daniel,
    Category: "General",
    TransDate: "18 Aug 2024",
    Amount: "-$42,30",
  },
  {
    SenderName: "Sun Park",
    Image: Emma,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: "+$120.00",
  },
  {
    SenderName: "Urban Services Hub",
    Image: UrbanLogo,
    Category: "General",
    TransDate: "17 Aug 2024",
    Amount: "-$65.00",
  },
  {
    SenderName: "Liam Hughes",
    Image: Liam,
    Category: "Groceries",
    TransDate: "15 Aug 2024",
    Amount: "+$65.75",
  },
];

export default usersData;
