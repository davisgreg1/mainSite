import { LinksFunction, MetaFunction, Link } from 'remix'
import styles from '~/styles/contact.css'

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
    title: `Contact - Greg | FullStack Developer`,
    description: `Contact Greg`
  }
}

export default function Contact () {
  return (
    <div className='container'>
      <div className='content'>
        <div className="underConstructionMsgContainer">
          <h1 className='glow'>
            <p>Contact</p>
          </h1>
        </div>
      </div>
    </div>
  )
}

