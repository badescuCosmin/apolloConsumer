import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  Axis,
} from "@visx/xychart";

const accessors = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.posts,
};

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
