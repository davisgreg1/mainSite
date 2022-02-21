import { useState, useEffect } from "react";
import { useLoaderData, MetaFunction, Link } from "remix";
import type { LoaderFunction } from "remix";
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
  let data = {
    slug: params.slug,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
  };
  return data;
};
const BlogSlug = () => {
  const [specificBlog, setSpecificBlog] = useState({});
  const data = useLoaderData();
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_TOKEN, slug } = data;
  const blogs = fetchContentfulData(
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN,
  );
  const blogsEmpty = isEmptyObj(blogs);

  useEffect(() => {
    if (!blogsEmpty) {
      setSpecificBlog(blogs.filter((blog) => blog.id === slug)[0]);
    }
  }, [blogs]);

  const contentText = specificBlog?.fields?.body?.content?.map((content) => {
    return content.content.map((content) => {
      return content.value;
    });
  });

  const updatedAvailable = specificBlog?.updatedAt;

  return (
    <>
      <div className="uniq-blog-container">
        <Link className="card-link-black" to="../">
          ↩ Go back
        </Link>
        <p className="uniq-blog-header">
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
        </p>
        {contentText?.map((content) => (
          <p tabIndex={0} aria-label={content} className="uniq-blog-content">
            {content}
          </p>
        ))}
      </div>
    </>
  );
};
export default BlogSlug;
