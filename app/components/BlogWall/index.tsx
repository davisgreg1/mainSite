import React from "react";
import Card from "../Card";

interface BlogWallProps {
  blogs: any;
  blogPage?: boolean;
  richText?: boolean;
}

const BlogWall = (props: BlogWallProps) => {
  const { blogs, blogPage } = props;

  return (
    <div className="blog-card-container">
      {blogs.length <= 0 ? (
        <>Blogs Coming Soon!</>
      ) : (
        blogs.map((blog: any) => {
          return <Card blogPage={blogPage} key={blog.id} blog={blog} />;
        })
      )}
    </div>
  );
};

export default BlogWall;
