import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import { ExternalScripts } from "remix-utils";
import { Fragment } from "react";
import Lottie from "react-lottie-player";
import { LinksFunction } from "remix";
import globalStyleSheet from "./styles/global.css";
import sharedStyles from "./styles/shared.css";
import TopNav from "./components/TopNav";
import lottieJson from "./images/home/oops.json";
import lottieJson404 from "./images/home/404.json";

// https://remix.run/api/app#links

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "stylesheet",
      href: globalStyleSheet,
    },
    { rel: "stylesheet", href: sharedStyles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap",
    },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <TopNav />
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <Lottie
          loop
          animationData={lottieJson}
          play
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          style={{ height: "100%" }}
        />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <div className="error-container">
          <Lottie
            loop
            animationData={lottieJson}
            play
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            style={{ height: "100%" }}
          />
        </div>
      );
      break;
    case 404:
      message = (
        <div className="error-container">
          <Lottie
            loop
            animationData={lottieJson404}
            play
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            style={{ height: "100%" }}
          />
        </div>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        {message}
        <a
          aria-label="Go back to home page"
          className="error-back-link"
          href="/">
          ↩ Go Back
        </a>
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <ExternalScripts />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
