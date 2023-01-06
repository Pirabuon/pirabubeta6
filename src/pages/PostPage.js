import React from "react";
import PostPageContent from "../components/PostPageContent";
import { gql, useQuery } from "@apollo/client";
import LoadSingle from "../components/loadme/LoadSingle";

const GET_POST_BY_SLUG = gql`
  query getPostBySlug($id: ID!) {
    blog(id: $id, idType: SLUG) {
      title
      date
      excerpt(format: RAW)
      content
      categories {
        nodes {
          slug
          name
        }
      }
      seoDescription {
        seodescription
      }
      author {
        node {
          name
        }
      }
    }
  }
`;

export default function PostPage(props) {
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: {
      id: props.match.params.slug
    }
  });

  const postFound = Boolean(data?.blog);

  return (
    <>
      <div className="page-container postSingle">
        {loading ? (
          <div>
            <LoadSingle />
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : !postFound ? (
          <p>Post could not be found.</p>
        ) : (
          <PostPageContent post={data.blog} excerpt={data.blog.excerpt} />
        )}
      </div>
    </>
  );
}
