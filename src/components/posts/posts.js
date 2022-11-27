import { Chart } from "../";
import { useGetPostsData } from "../../features";
export const Posts = () => {
  const { loading, chartData, error } = useGetPostsData();
  return (
    <>
      <h1>The number of posts created in each month of 2019</h1>
      {chartData.length ? <Chart data={chartData} /> : "No Data available"}
    </>
  );
};
