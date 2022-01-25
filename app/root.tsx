import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from 'remix'
import { Fragment } from 'react'
import { LinksFunction } from 'remix'
import globalStyleSheet from './styles/global.css'
import sharedStyles from './styles/shared.css'
import TopNav from './components/TopNav'

// https://remix.run/api/app#links

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStyleSheet
    },
    { rel: 'stylesheet', href: sharedStyles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap'
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      charSet: 'UTF-8',
      href:
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href:
        'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
    },
    {
      rel: 'preload',
      href:
        'https://drive.google.com/uc?export=view&id=1i9NVQ9SOEFbzVsIo0u51qcZcVTwFPCHX',
      as: 'image'
    },
    {
      rel: 'preload',
      href:
        'https://drive.google.com/uc?export=view&id=1mF-p0RvL9B0k-DDdFgPmWduSCfCk_MOb',
      as: 'image'
    },
    {
      rel: 'preload',
      href:
        'https://www.moneycaptainlabs.com/wp-content/uploads/2021/02/logo-b.png',
      as: 'image'
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap'
    }
  ]
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App () {
  return (
    <Document>
      <Layout>
        <TopNav />
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary ({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title='Error!'>
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary () {
  let caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}

function Document ({
  children,
  title
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

function Layout ({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>
}
