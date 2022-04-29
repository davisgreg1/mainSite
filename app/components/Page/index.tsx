import React from "react";

type PagePropsType = {
  number: string;
  pageHeader?: string;
  isSlides?: boolean;
};
const Page = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<PagePropsType>
>((props, ref) => {
  const { number, pageHeader, isSlides, children } = props;
  const strToNumber = parseInt(number);
  const isOddPage = strToNumber % 2 !== 0;
  return (
    <div
      className={`${isSlides ? "bookPage-slides bookPage" : "bookPage"} ${
        isOddPage ? "leftPage" : "rightPage"
      }`}
      ref={ref}>
      <div className="page-content-container">
        <h1>{pageHeader}</h1>
        <>{children}</>
        <div
          className={`page-content-page-number ${
            isOddPage ? "page-number-flexStart" : "page-number-flexEnd"
          }`}>
          {strToNumber - 1 === 0 || strToNumber === 6
            ? ""
            : `${strToNumber - 1}.`}
        </div>
      </div>
    </div>
  );
});

export default Page;
