'use client';

import type { Skill } from '@/lib/types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { cn } from '@/lib/utils';

type SkillsChartProps = {
  skills: Skill[];
};

export default function SkillsChart({ skills }: SkillsChartProps) {
  const chartData = skills.sort((a, b) => a.proficiency - b.proficiency);

  const chartConfig = {
    proficiency: {
      label: 'Proficiency',
    },
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))',
    },
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Skill Proficiency</CardTitle>
        <CardDescription>On a scale of 0 to 100</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: 10, right: 40 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              className="text-sm"
            />
            <XAxis dataKey="proficiency" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="proficiency"
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              <LabelList
                dataKey="proficiency"
                position="right"
                offset={8}
                className="fill-foreground font-semibold"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
