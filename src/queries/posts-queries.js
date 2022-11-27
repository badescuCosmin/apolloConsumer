import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    allPosts(count: 100) {
      id
      title
      body
      published
      createdAt
      author {
        id
        firstName
        lastName
        avatar
      }
    }
  }
`;
