import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    allPosts(count: 100) {
      id
      createdAt
    }
  }
`;
