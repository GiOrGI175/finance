import React from "react";
import Image from "next/image";
import { subscriptionData, Subscription } from "@/commons/hooks/RecurringBills";
import { Active, Overdue } from "@/utility/images/ImgExport";

type SubscriptionListProps = {
  inputValue: string;
  option: string;
};

const SubscriptionList: React.FC<SubscriptionListProps> = ({
  inputValue,
  option,
}) => {
  // Filter by name (case-insensitive and trim whitespace)
  const filteredDataByName = subscriptionData.filter((item: Subscription) => {
    return item.name.toLowerCase().includes(inputValue.trim().toLowerCase());
  });

  const filterFunction = (
    active: string,
    data: Subscription[]
  ): Subscription[] => {
    let filteredData = [...data];

    switch (active) {
      case "Latest":
        return filteredData.sort((a, b) => b.cycleDay - a.cycleDay);
      case "High":
        return filteredData.sort((a, b) => b.amount - a.amount);
      case "Low":
        return filteredData.sort((a, b) => a.amount - b.amount);
      case "Overdue":
        return filteredData.sort((a, b) =>
          a.status === "overdue" ? -1 : b.status === "overdue" ? 1 : 0
        );
      default:
        return filteredData;
    }
  };

  const filtered = filterFunction(option, filteredDataByName);

  return (
    <>
      {filtered.map((subscription, index: number) => (
        <div
          className={`mt-[24px] w-full sm:h-[53px] h-[61px] border-b-[1px] sm:flex gap-x-[10px] sm:justify-between border-gray-500 border-opacity-[15%] items-${
            index === 0 ? "start" : "center"
          }`}
          key={subscription.id}
        >
          <div className="max-w-[319px] w-full flex gap-[16px]">
            <span className={`${subscription.iconBgColor} rounded-full `}>
              {subscription.icon}
            </span>
            <span className="text-[14px] font-bold">{subscription.name}</span>
          </div>
          <div className="flex justify-between gap-x-[10px] max-w-[252px] w-full">
            <div className="max-w-[120px] w-full flex gap-[8px]">
              <span className="text-[12px]">
                {subscription.billingCycle}-{subscription.cycleDay}th
              </span>
              {subscription.status === "active" && (
                <Image src={Active} alt="Active status" />
              )}
              {subscription.status === "overdue" && (
                <Image src={Overdue} alt="Overdue status" />
              )}
            </div>
            <div className="max-w-[100px] w-full">
              <span className="text-[14px]">
                ${subscription.amount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubscriptionList;
