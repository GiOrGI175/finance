'use client';

import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import { BudgetView } from '@/commons/hooks/BudgetData';

import { Card, CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { colorMap } from '@/commons/hooks/PotsData';
import { budgetsT } from '../__organisms/BudgetPage';
import axiosInstance from '@/commons/hooks/lib/axiosInstance';

type TransactionT = {
  _id: string;
  RecipientOrSender: string;
  category: string;
  TransactionDate: string;
  Amount: number;
  __v: number;
};

type BudgetData = {
  _id: string;
  budgetName: string;
  Target: number;
  theme: string;
  __v: number;
  procent: number;
  Spent: number;
  Remaining: number;
  transactions: TransactionT[];
};

export function BudgetChart2({ budgetsData }: { budgetsData: BudgetData[] }) {
  const chartConfig: ChartConfig = {};

  budgetsData.forEach((category) => {
    chartConfig[category.budgetName] = {
      label: category.budgetName,
      color:
        colorMap[
          category.theme.charAt(0).toUpperCase() + category.theme.slice(1)
        ] || '#000000',
    };
  });

  const chartData = budgetsData.map((category) => ({
    Category: category.budgetName,
    enterMoney: category.Spent,
    fill:
      colorMap[
        category.theme.charAt(0).toUpperCase() + category.theme.slice(1)
      ] || '#000000',
    limit: category.Target,
  }));
  const totalVEnteryMoney = chartData.reduce(
    (acc, curr) => acc + curr.enterMoney,
    0
  );

  const totalLimit = chartData.reduce((acc, curr) => acc + curr.limit, 0);

  return (
    <Card className='flex flex-col border-none  w-full max-md:w-[270px]'>
      <CardContent className='flex-1 w-full max-md:!p-[0px] '>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px] '
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='enterMoney'
              nameKey='Category'
              innerRadius={80}
              outerRadius={120}
              strokeWidth={8}
            >
              <Label
                className='relative '
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    const safeTotalVisitors = totalVEnteryMoney || 0;

                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-3xl font-bold relative z-40'
                        >
                          {safeTotalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 30}
                          style={{
                            fill: '#6B7280',
                            fontSize: '12px',
                            fontFamily: 'publicSans, serif',
                            fontWeight: 'normal',
                          }}
                        >
                          {`of $${totalLimit.toLocaleString()} limit`}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        ></tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
