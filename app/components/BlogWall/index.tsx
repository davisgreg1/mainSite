import React from "react";
import Card from "../Card";
import { Carousel } from "@trendyol-js/react-carousel";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

interface BlogWallProps {
  blogs: any;
  blogPage?: boolean;
  richText?: boolean;
  isMobile?: boolean;
}

const BlogWall = (props: BlogWallProps) => {
  const { blogs, blogPage, isMobile } = props;

  return (
    <div className="blog-card-container">
      {blogs.length <= 0 ? (
        <>Blogs Coming Soon!</>
      ) : isMobile ? (
        <Carousel
          responsive={true}
          leftArrow={
            <div className="carousel-arrow">
              {" "}
              <AiFillLeftCircle />{" "}
            </div>
          }
          rightArrow={
            <div className="carousel-arrow">
              {" "}
              <AiFillRightCircle />{" "}
            </div>
          }
          swipeOn={0.25}
          transition={0.5}
          show={1}
          slide={1}
          swiping={true}>
          {blogs.map((blog: any, idx: number) => {
            return <Card blogPage={blogPage} key={blog.id} blog={blog} />;
          })}
        </Carousel>
      ) : (
        blogs.map((blog: any, idx: number) => {
          return <Card blogPage={blogPage} key={blog.id} blog={blog} />;
        })
      )}
    </div>
  );
};

export default BlogWall;
