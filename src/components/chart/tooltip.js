import { accessors } from "./accessors";

export const Tooltip = ({ tooltipData, colorScale }) => {
  return (
    <div>
      <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
        {tooltipData.nearestDatum.key}
      </div>
      {accessors.xAccessor(tooltipData.nearestDatum.datum)}
      {", "}
      {accessors.yAccessor(tooltipData.nearestDatum.datum)}
    </div>
  );
};
