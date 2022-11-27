import { useQuery, gql } from "@apollo/client";
import moment from "moment";
import { GET_POSTS } from "../queries";

const getMonthForPost = (createdAt) =>
  moment
    .unix(createdAt / 1000)
    .utc()
    .format("MMMM");

const mapObjToDataChart = (obj) => {
  const data = [];
  Object.keys(obj).forEach((k) => data.push({ x: k, posts: obj[k] }));
  return data;
};

const postsOnEachMonth = {};
export const useGetPostsData = () => {
  const { data, loading, error } = useQuery(GET_POSTS);
  data?.allPosts.forEach((element) => {
    const month = getMonthForPost(element.createdAt);
    if (postsOnEachMonth[month]) {
      postsOnEachMonth[month] += 1;
    } else {
      postsOnEachMonth[month] = 1;
    }
  });

  return {
    loading,
    error,
    chartData: mapObjToDataChart(postsOnEachMonth),
  };
};
