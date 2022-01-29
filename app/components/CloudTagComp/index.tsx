import React, { useState } from 'react'
import { Cloud, renderSimpleIcon, ICloud } from 'react-icon-cloud'
import { useMediaQuery } from 'react-responsive'
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

const CloudTagComp = (props: any) => {
  const { ssrID, skillsRoute } = props
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
  const [skillSelectedDescription, setSkillSelectedDescription] = useState(
    'Select Skill to see a description'
  )
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1241 })

  const renderSkillDescription = (skill: string) => {
    switch (skill) {
      case 'JavaScript':
        return ` Javascript is my primary language. I have experience with ES6,
        TypeScript, React, Redux, Node.js, Express, and many other
        technologies.
        `
      case 'Jest':
        return `Jest is a testing framework for JavaScript. It is used to
        test React components. I use it daily.`

      case 'Visual Studio Code':
        return `Visual Studio Code is a code editor that I enjoy using daily.`

      case 'JSON':
        return `JSON is a data format that I use daily.`

      case 'Trello':
        return `Trello is a project management tool that I use daily.`

      case 'JQuery':
        return `JQuery is a JavaScript library that I use daily.`

      case 'npm':
        return `NPM is a package manager for JavaScript. I use it daily.`

      case 'Jira':
        return `Jira is a project management tool that I use daily.`

      case 'Redis':
        return `Redis is a key-value store that I use daily.`

      case 'macOS':
        return `MacOS is a platform that I use daily.`

      case 'React':
        return `React is a JavaScript library that I use daily.`

      case 'CSS3':
        return `CSS3 is a style sheet language that I use daily.`

      case 'HTML5':
        return `HTML5 is a markup language that I use daily.`

      case 'Git':
        return `Git is a version control system that I use daily.`

      case 'Express':
        return `Express is a web framework that I use daily.`

      case 'PostgreSQL':
        return `PostgreSQL is a database that I use daily.`

      case 'Amazon AWS':
        return `Amazon AWS is a cloud platform that I use daily.`

      case 'TypeScript':
        return `TypeScript is a JavaScript library that I use daily.`

      case 'Node.js':
        return `Node.js is a JavaScript runtime that I use daily.`

      case 'Sequelize':
        return `Sequelize is a database ORM that I use daily.`

      case 'Next.js':
        return `Next.js is a web framework that I use daily.`

      case 'jQuery':
        return `jQuery is a JavaScript library that I don't use daily but am skilled in.`
    }
  }

  const makeProps = (): Partial<ICloud> & { root: React.CSSProperties } => ({
    root: {
      top: 0,
      left: 0,
      right: 0,
      height: '200vh',
      position: 'absolute'
    },
    containerProps: {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 40,
        backgroundImage:
          'radial-gradient( circle, rgb(11, 34, 238) 0%, rgb(15, 120, 181) 100%, rgb(17, 216, 251) 50% )',
        borderRadius: '777px'
      }
    },
    // https://www.goat1000.com/tagcanvas-options.php
    options: {
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: '#0000',
      reverse: false,
      tooltip: (isDesktopOrLaptop && !skillsRoute) ? 'div' : 'native',
      tooltipDelay: 0,
      wheelZoom: false,
      radiusX: 0.7,
      radiusY: 0.7,
      radiusZ: 0.7,
      maxSpeed: 0.06,
      tooltipClass: 'icon-title',
      freezeActive: skillsRoute ? true: false
    }
  })

  const makeIcons = () =>
    icons.map((icon: any) => {
      const description = renderSkillDescription(icon.title)
      return renderSimpleIcon({
        icon,
        minContrastRatio: 3,
        bgHex: '#fff',
        size: 42,
        fallbackHex: '#fff',
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => {
            e.preventDefault()
            setSkillSelectedDescription(description)
          }
        }
      })
    })
  const constructedProps = makeProps()
  const cloudIcons = makeIcons()

  return (
    <div className='cloudTagComp-container'>
      {skillsRoute ? (
        <p className='skills-description'>{skillSelectedDescription}</p>
      ) : (
        ''
      )}
      <Cloud
        containerProps={constructedProps.containerProps}
        options={constructedProps.options}
        id={ssrID}
      >
        {cloudIcons}
      </Cloud>
    </div>
  )
}
export default CloudTagComp
