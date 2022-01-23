import { LinksFunction, MetaFunction } from 'remix'
import styles from '~/styles/adminloginz.css'

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
    description: `Admin Login`
  }
}

export default function AdminLoginZ () {
  return (
    <div className='container'>
      <div className='content'>
        <div className='underConstructionMsgContainer'>
          <h1 className='glow'>
            <p>Login here</p>
          </h1>
        </div>
      </div>
    </div>
  )
}
