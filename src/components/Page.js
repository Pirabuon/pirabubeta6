import React from "react";
import { gql, useQuery } from "@apollo/client";

const Page = ({ pageId }) => {
  const { data, loading, error } = useQuery(
    gql`
      query($id: ID!) {
        page(id: $id, idType: URI) {
          title
          content
          id
          databaseId
          uri
          acfFields {
            fieldname
          }
        }
      }
    `,
    { variables: { id: pageId } }
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>{data.page.title}</h1>
      <h2>{data.page.acfFields.fieldname}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </div>
  );
};

export default Page;
