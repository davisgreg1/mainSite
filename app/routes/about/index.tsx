import { LinksFunction, MetaFunction, Link } from 'remix'
import styles from '~/styles/about.css'

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
    title: `About - Greg | FullStack Developer`,
    description: `About Greg`
  }
}

export default function About () {
  return (
    <div className='container'>
      <div className='content'>
        <div className="underConstructionMsgContainer">
          <h1 className='glow'>
            <p>ABOUT</p>
          </h1>
        </div>
        <p>
        I'm a software engineer with a passion for building products that are accessible, intuitive, and user-friendly. I'm currently working at{' '}.

        </p>
      </div>
    </div>
  )
}

