import { LinksFunction, MetaFunction } from 'remix'
import CloudTagComp from '~/components/CloudTagComp'
import {
  siJavascript,
  siTypescript,
  siNextdotjs,
  siNodedotjs,
  siCss3,
  siHtml5,
  siReact,
  siGit,
  siExpress,
  siPostgresql,
  siAmazonaws,
  siJest,
  siVisualstudiocode,
  siSequelize,
  siJson,
  siTrello,
  siJquery,
  siNpm,
  siJira,
  siRedis,
  siMacos
} from 'simple-icons/icons'
import styles from '~/styles/skills.css'

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Skills - Greg | FullStack Developer`,
    description: `Greg's Skills`
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Skills = () => {
  const icons = [
    siJavascript,
    siTypescript,
    siNextdotjs,
    siNodedotjs,
    siCss3,
    siHtml5,
    siReact,
    siGit,
    siExpress,
    siPostgresql,
    siAmazonaws,
    siJest,
    siVisualstudiocode,
    siSequelize,
    siJson,
    siTrello,
    siJquery,
    siNpm,
    siJira,
    siRedis,
    siMacos
  ]

  return (
    <div className='content' id='cloud-container'>
      <CloudTagComp ssrID={'skillsSSRCloud'} skillsRoute={true} />
    </div>
  )
}
export default Skills
