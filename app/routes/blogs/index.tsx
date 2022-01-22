import { LinksFunction, MetaFunction } from 'remix'
import styles from '~/styles/blogs.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
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
