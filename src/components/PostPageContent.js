import React from "react";
import { Helmet } from "react-helmet";

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostPageContent({ post }) {
  const { date, title, content, author, categories, featuredImage } = post;
  const haveCategories = Boolean(categories?.nodes?.length);
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={post.seoDescription.seodescription} />
        <meta name="og:title" content={title} />
        <meta name="og:type" content="project" />
        <meta name="og:image" content={featuredImage} />
        <meta
          name="og:site_name"
          content="Pirabu Chandran | Graphic designer - Paris,France"
        />
        <meta
          name="og:description"
          content={post.seoDescription.seodescription}
        />
        <meta name="fb:page_id" content="" />
        <meta name="og:email" content="pirabu.chandran@gmail.com" />
        <meta name="og:phone_number" content="+33(0)7 60 77 49 34" />

        <meta property="twitter:card" content={title} />
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content={post.seoDescription.seodescription}
        />
        <meta property="twitter:image" content={featuredImage} />
      </Helmet>
      <article className="gabB5">
        <h1>{title}</h1>
        <p className="post-meta">
          <span role="img" aria-label="writing hand"></span> {author.node.name}{" "}
          - {formatDate(date)}
        </p>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {haveCategories ? <div className="categories-list"></div> : null}
      </article>
    </>
  );
}
