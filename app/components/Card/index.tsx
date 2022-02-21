import { Link, useLoaderData } from "remix";
import ellipseText from "~/utils/ellipsisText";
import dayjs from "dayjs";

interface CardProps {
  blog: any;
  blogPage?: boolean;
}
const Card = (props: CardProps) => {
  const { blog, blogPage } = props;
  const content = blog.fields.body.content;
  const contentText = content.map((content) => {
    return content.content.map((content) => {
      return content.value;
    });
  });

  const contentTextJoined = contentText.join(" ");
  const contentToDisplay = blogPage
    ? ellipseText(contentTextJoined, 300)
    : ellipseText(contentTextJoined, 200);

  return (
    <Link
      aria-describedby="contentToDisplay"
      to={blogPage ? blog.id : `/blogs/${blog.id}`}
      className="card-link">
      <div
        className={
          blogPage
            ? " individual-card-container container-color-black"
            : "individual-card-container"
        }>
        <div className="individual-card-title">
          <h1 className="card-title-text">{blog.fields.title}</h1>
        </div>
        <div id="contentToDisplay" className="individual-card-content">
          {contentToDisplay}
        </div>
        <footer className="individual-card-footer">
          <p className="individual-card-footer-text">
            Greg Davis <span className="individual-card-footer-span">|</span>{" "}
            {dayjs(blog.createdAt).format("MMMM DD, YYYY")}
          </p>
        </footer>
      </div>
    </Link>
  );
};
export default Card;
