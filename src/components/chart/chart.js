import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  Axis,
} from "@visx/xychart";

const data = [
  { x: "2020-01-01", posts: 50 },
  { x: "2020-01-02", posts: 122 },
  { x: "2020-01-03", posts: 10 },
  { x: "2020-01-04", posts: 32 },
  { x: "2020-01-11", posts: 1 },
];

const accessors = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.posts,
};

export const Chart = () => (
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
        <div>
          <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
            {tooltipData.nearestDatum.key}
          </div>
          {accessors.xAccessor(tooltipData.nearestDatum.datum)}
          {", "}
          {accessors.yAccessor(tooltipData.nearestDatum.datum)}
        </div>
      )}
    />
  </XYChart>
);
