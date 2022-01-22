import { LinksFunction, MetaFunction } from 'remix'
import styles from '~/styles/skills.css'

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
    title: `Skills - Greg | FullStack Developer`,
    description: `Greg's Skills`
  }
}

export default function Skills () {
  return (
    <div className='container'>
      <div className='content'>
        <div className='underConstructionMsgContainer'>
          <h1 className='glow'>
            <p>Skills</p>
          </h1>
        </div>
      </div>
    </div>
  )
}
