import React from "react";
import Post from "../Post";

interface ContentType {
  data: any;
  marks: any;
  nodeType: string;
  value: string;
}

interface BlogContent {
  content: Array<ContentType>;
}

interface BlogBody {
  content: Array<BlogContent>;
  data?: any;
  nodeType: string;
}

interface BlogFields {
  title: string;
  body: BlogBody;
}

interface Blog {
  createdAt: string;
  updatedAt?: string;
  fields: BlogFields;
  id: string;
}

interface BlogListProps {
  blogs: Array<Blog>;
}
const BlogList = (props: BlogListProps) => {
  const { blogs } = props;

  return blogs.map((blog) => {
    return <Post key={blog.id} blog={blog} id={blog.id} />;
  });
};

export default BlogList;
