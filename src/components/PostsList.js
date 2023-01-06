import React from "react";
import PostCard from "../components/PostCard";
import { gql, useQuery } from "@apollo/client";
import LoadPostCard from "./loadme/LoadPostCard";

const GET_ALL_POSTS = gql`
  query getAllPosts($first: Int, $after: String) {
    blogs(first: $first, after: $after) {
      nodes {
        databaseId
        title
        date
        slug
        excerpt
        author {
          node {
            name
          }
        }

        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default function PostsList() {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_POSTS, {
    variables: { first: 20 }
  });

  if (loading)
    return (
      <div>
        <LoadPostCard />
        <LoadPostCard />
        <LoadPostCard />
      </div>
    );
  if (error) return <p>Somthing wrong... :( </p>;

  const blogsFound = Boolean(data?.blogs.nodes.length);
  if (!blogsFound) {
    return <p>No projects...</p>;
  }

  return (
    <div className="blogs-list">
      {data.blogs.nodes.map((post) => (
        <PostCard key={post.databaseId} post={post} />
      ))}
      {data.blogs.pageInfo.hasNextPage && (
        <button
          className="btnA"
          onClick={() =>
            fetchMore({
              variables: {
                after: data.blogs.pageInfo.endCursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.blogs.nodes;
                const pageInfo = fetchMoreResult.blogs.pageInfo;

                return newEdges.length
                  ? {
                      blogs: {
                        __typename: previousResult.blogs.__typename,
                        nodes: [...previousResult.blogs.nodes, ...newEdges],
                        pageInfo
                      }
                    }
                  : previousResult;
              }
            })
          }
        >
          More Posts
        </button>
      )}
    </div>
  );
}
