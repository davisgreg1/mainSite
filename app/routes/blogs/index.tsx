import { LinksFunction, MetaFunction } from 'remix'
import styles from '~/styles/blogs.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
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

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Blogs - Greg | FullStack Developer`,
    description: `Greg's Blogs`
  }
}

export default function Blogs () {
  return (
    <div className='container'>
      <div className='content'>
        <div className="underConstructionMsgContainer">
          <h1 className='glow'>
            <p>Blogs</p>
          </h1>
        </div>
      </div>
    </div>
  )
}



// import { LinksFunction, MetaFunction } from 'remix'
// import styles from '~/styles/blogs.css'

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: 'stylesheet',
//       href: styles
//     }
//   ]
// }

// // https://remix.run/api/conventions#meta
// export let meta: MetaFunction = () => {
//   return {
//     title: `Greg's blogs`,
//     description: `Greg's blogs`,
//   }
// }

// export default function Blogs () {
//   return (
//     <div className='container'>
//       <h1 className='content glow'>
//         <p>BLOGS</p>
//       </h1>
//     </div>
//   )
// }
