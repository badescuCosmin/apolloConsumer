import { useQuery } from "@apollo/client";
import moment from "moment";
import { DATE_FORMAT } from "../config";
import { GET_POSTS } from "../queries";

const getMonthForPost = (createdAt) =>
  moment.unix(createdAt / 1000).format(DATE_FORMAT);

const mapObjToDataChart = (obj) => {
  const data = [];
  Object.keys(obj).forEach((k) => data.push({ month: k, posts: obj[k] }));
  return data;
};

// this object with months of the year initialized to 0 is needed to keep months in order;
const postsOnEachMonth = {
  January: 0,
  February: 0,
  March: 0,
  April: 0,
  May: 0,
  June: 0,
  July: 0,
  August: 0,
  September: 0,
  October: 0,
  November: 0,
  December: 0,
};
export const useGetPostsData = () => {
  const { data, loading, error } = useQuery(GET_POSTS);
  data?.allPosts.forEach((element) => {
    const month = getMonthForPost(element.createdAt);
    postsOnEachMonth[month] += 1;
  });
  return {
    loading,
    error,
    chartData: mapObjToDataChart(postsOnEachMonth),
  };
};
