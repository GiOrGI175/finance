'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import { BudgetView } from '@/commons/hooks/BudgetData';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartConfig = {
  enterMoney: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function BudgetChart() {
  const chartData = BudgetView.map((category) => ({
    Category: category.BudgetCategory,
    enterMoney: category.enterMoney,
    fill: category.color,
    limit: category.limit,
  }));

  const totalVEnteryMoney = chartData.reduce(
    (acc, curr) => acc + curr.enterMoney,
    0
  );

  const totalLimit = chartData.reduce((acc, curr) => acc + curr.limit, 0);

  return (
    <Card className=' flex flex-col border-none max-w-[364px] w-full '>
      <CardContent className='flex-1 pb-0'>
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
