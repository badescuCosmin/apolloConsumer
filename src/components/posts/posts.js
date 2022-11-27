import { Chart, Loading } from "../";
import { useGetPostsData } from "../../features";

export const Posts = () => {
  const { loading, chartData, error } = useGetPostsData();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  return (
    <>
      <h1>The number of posts created in each month of 2019</h1>
      <Chart data={chartData} />
    </>
  );
};
