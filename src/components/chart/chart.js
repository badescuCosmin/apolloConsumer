import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  Axis,
} from "@visx/xychart";
import { accessors } from "./accessors";
import { Tooltip as ChartTooltip } from "./tooltip";

export const Chart = ({ data }) => (
  <XYChart
    height={300}
    width={1000}
    xScale={{ type: "band" }}
    yScale={{ type: "liner" }}
  >
    <AnimatedAxis orientation="bottom" />
    <AnimatedGrid stroke="red" columns={false} numTicks={4} />
    <Axis orientation="left" />
    <AnimatedLineSeries dataKey="posts" data={data} {...accessors} />

    <Tooltip
      snapTooltipToDatumX
      snapTooltipToDatumY
      showVerticalCrosshair
      showSeriesGlyphs
      renderTooltip={({ tooltipData, colorScale }) => (
        <ChartTooltip tooltipData={tooltipData} colorScale={colorScale} />
      )}
    />
  </XYChart>
);
