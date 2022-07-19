import { useState, useEffect } from "react";
import snarkdown from "snarkdown";
import { useNavigate } from "react-router-dom";
import { useLoaderData, MetaFunction } from "remix";
import type { LoaderFunction } from "remix";
import { ExternalScriptsFunction } from "remix-utils";
import { Helmet } from "react-helmet";
import { StyledKofiButton } from "../../components/KofiButton";
import dayjs from "dayjs";
import { fetchContentfulData } from "~/utils/fetchContentfulData";
import isEmptyObj from "~/utils/isEmptyObj";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Blog | FullStack Developer`,
    description: `Greg's Blogs`,
  };
};
export const loader: LoaderFunction = async ({ params }) => {
  const blogs = await fetchContentfulData(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_DELIVERY_TOKEN,
  );
  let data = {
    slug: params.slug,
    blogs: blogs,
  };
  return data;
};

const BlogSlug = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { blogs, slug } = data;
  const blogsEmpty = isEmptyObj(blogs);
  const specificBlog = !blogsEmpty
    ? blogs?.filter((blog: any) => blog.id === slug)[0]
    : {};

  let contentText = snarkdown(specificBlog.fields?.body);

  const updatedAvailable = specificBlog?.updatedAt;
  const handleOnClick = () => navigate(-1);

  return (
    <>
      <div className="uniq-blog-container">
        <button onClick={handleOnClick} className="uniq-blog-goBackBtn">
          {" "}
          ↩ Go back
        </button>
        <div className="uniq-blog-header">
          <h1
            tabIndex={0}
            aria-label={specificBlog?.fields?.title}
            className="uniq-blog-sub">
            {specificBlog?.fields?.title}
          </h1>
          <h4
            tabIndex={0}
            aria-label={"Author: Gregory Davis"}
            className="uniq-blog-sub">
            By: Gregory Davis
          </h4>
          {updatedAvailable ? (
            <h5
              tabIndex={0}
              aria-label={"content updated"}
              className="uniq-blog-sub">
              Last updated:{" "}
              {dayjs(specificBlog.updatedAt).format("MMMM DD, YYYY")}
            </h5>
          ) : (
            <h5
              tabIndex={0}
              aria-label={"content created"}
              className="uniq-blog-sub">
              Created: {dayjs(specificBlog?.createdAt).format("MMMM DD, YYYY")}
            </h5>
          )}
        </div>
        <div className={"uniq-blog-content-container"}>
          <div
            tabIndex={0}
            aria-label={`blog content`}
            className="uniq-blog-content"
            dangerouslySetInnerHTML={{ __html: contentText }}
          />
          <StyledKofiButton color="0D47A1" />
        </div>
      </div>
    </>
  );
};
export default BlogSlug;
