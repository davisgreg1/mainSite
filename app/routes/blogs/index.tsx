import { LinksFunction, MetaFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import BlogWall from "../../components/BlogWall";
import { fetchContentfulData } from "~/utils/fetchContentfulData";
import styles from "~/styles/blogs.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap",
    },
  ];
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Blogs - Greg | FullStack Developer`,
    description: `Greg's Blogs`,
  };
};

export const loader: LoaderFunction = () => {
  let data = {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
  };
  return data;
};

interface PostsType {
  body: any;
  title: string;
}
const Blogs = () => {
  const loaderData = useLoaderData();
  const { CONTENTFUL_DELIVERY_TOKEN, CONTENTFUL_SPACE_ID } = loaderData;
  const blogs = fetchContentfulData(
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN,
  );
  return (
    <div className="blog-route-container">
      <h1 className="blog-route-heading">
        <p>Blogs</p>
      </h1>
      <BlogWall blogPage={true} blogs={blogs} />
    </div>
  );
};

export default Blogs;
