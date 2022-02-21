import React from "react";

const Post = (post) => {
  const { blog, id } = post;

  return (
    <>
      <div>{blog.fields.title}</div>
      <div>
        {blog.fields.body.content.map((content) => {
          return content.content.map((content) => {
            return <div style={{ padding: "16px" }}>{content.value}</div>;
          });
        })}
      </div>
    </>
  );
};

export default Post;
