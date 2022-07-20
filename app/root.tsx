import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from "remix";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { ExternalScripts } from "remix-utils";
import { Fragment, useEffect } from "react";
import Lottie from "react-lottie-player";
import { LinksFunction } from "remix";
import globalStyleSheet from "./styles/global.css";
import sharedStyles from "./styles/shared.css";
import TopNav from "./components/TopNav";
import lottieJson from "./images/home/oops.json";
import lottieJson404 from "./images/home/404.json";
import * as gtag from "~/utils/gtags.client";

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

// Load the GA tracking id from the .env
export const loader: LoaderFunction = async () => {
  // return json<LoaderData>({ gaTrackingId: process.env.GA_TRACKING_ID });
  return {
    gaTrackingId: process.env.GA_TRACKING_ID,
    nodeEnv: process.env.NODE_ENV,
  };
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
  const location = useLocation();
  const loaderData = useLoaderData();
  const { gaTrackingId, nodeEnv } = loaderData;

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);
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
        {nodeEnv === "development" || !gaTrackingId ? null : (
          <>
            <script
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
            <script
              defer
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
          </>
        )}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
