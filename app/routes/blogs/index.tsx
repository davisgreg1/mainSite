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
  ];
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Blogs - Greg | FullStack Developer`,
    description: `Greg's Blogs`,
  };
};

export const loader: LoaderFunction = async () => {
  const blogs = await fetchContentfulData(
    process.env.CONTENTFUL_SPACE_ID,
    process.env.CONTENTFUL_DELIVERY_TOKEN,
  );
  return {
    blogs: blogs,
  };
};

interface PostsType {
  body: any;
  title: string;
}
const Blogs = () => {
  const loaderData = useLoaderData();
  const { blogs } = loaderData;

  return (
    <div className="blog-route-container">
      <BlogWall blogPage={true} blogs={blogs} />
    </div>
  );
};

export default Blogs;
