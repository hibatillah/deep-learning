import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import { cn } from "@/lib/utils"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export default function Chart({
  score,
  className,
}: {
  score: number
  className?: string
}) {
  const chartData = [
    { sentiment: "review", score: score, fill: "hsl(var(--primary))" },
  ]

  const chartConfig = {
    score: {
      label: "Score",
    },
    review: {
      label: "Review",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer
      config={chartConfig}
      className={cn("mx-auto aspect-square h-[200px]", className)}
    >
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={score * 3.6 + 90}
        innerRadius={80}
        outerRadius={110}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[86, 74]}
        />
        <RadialBar
          dataKey="score"
          background
          cornerRadius={10}
        />
        <PolarRadiusAxis
          tick={false}
          tickLine={false}
          axisLine={false}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {chartData[0].score.toFixed(1).toLocaleString() + "%"}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground text-lg"
                    >
                      Score
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}
