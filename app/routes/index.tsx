import React, { useEffect, useState } from 'react'
import { LinksFunction, MetaFunction } from 'remix'
import { useMediaQuery } from 'react-responsive'
import { useInView } from 'react-intersection-observer'
import { Cloud, renderSimpleIcon, ICloud } from 'react-icon-cloud'
import styles from '~/styles/index.css'
import Particles from 'react-tsparticles'
import particlesConfig from '~/particlesConfig'
import portfolioBackImg from '../images/home/portfolioBackImg.jpeg'
import MyFlipBook from '../components/MyFlipBook'
import MyMap from '../components/MyMap'
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
    }
  ]
}

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: `Home - Greg | FullStack Developer`,
    description: 'Welcome to my site'
  }
}

export function loader () {
  return {
    ENV: {
      GOOGLE_MAP_ID: process.env.GOOGLE_MAP_ID,
      GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY
    }
  }
}

export default function IndexRoute () {
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

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1241 })
  const isTabletVal = useMediaQuery({ minWidth: 720, maxWidth: 1240 })
  const isMobileVal = useMediaQuery({ maxWidth: 719 })

  const [isMobile, setIsMobile] = useState(isMobileVal)
  const [isTablet, setIsTablet] = useState(isTabletVal)
  const [isDesktop, setIsDesktop] = useState(isDesktopOrLaptop)

  useEffect(() => {
    setIsMobile(isMobileVal)
    setIsTablet(isTabletVal)
    setIsDesktop(isDesktopOrLaptop)
  })

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 1
  })

  const portfolioBackImgStyle = {
    // backgroundImage: `url(${portfolioBackImg})`,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    backgroundSize: 'contain',
    backgroundRepeat: 'round',
    display: 'flex'
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
      clickToFront: 250,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: '#0000',
      reverse: false,
      tooltip: isDesktopOrLaptop ? 'div' : 'native',
      tooltipDelay: 0,
      wheelZoom: false,
      shuffleTags: true,
      radiusX: 0.7,
      radiusY: 0.7,
      radiusZ: 0.7,
      maxSpeed: 0.06,
      tooltipClass: 'icon-title'
    }
  })

  const makeIcons = () =>
    icons.map(icon => {
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
          onClick: (e: any) => e.preventDefault()
        }
      })
    })

  const props = makeProps()
  const cloudIcons = makeIcons()

  const customOptions = {
    mapTypeControl: false,
    zoom: 15,
    clickableIcons: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false
  }

  return (
    <div className='container'>
      <section id='section-home' className='section-content section'>
        <div className='heading-subtexts-container'>
          <h1 className='heading-h1-container'>
            <p className='heading-text'>Hi,</p>
            <p className='heading-text'>I'm Greg,</p>
            <p className='heading-h1-lastItem heading-text'>Web Developer</p>
          </h1>
          <div className='headings-paragraph-container'>
            <p className='headings-paragraph-item'>Software Engineer</p>
            <span className='headings-pipe'>|</span>
            <p className='headings-paragraph-item'>FullStack Developer</p>
            <span className='headings-pipe'>|</span>
            <p className='headings-paragraph-item'>Dad</p>
          </div>
        </div>
        <Particles id='tsparticles' options={particlesConfig} />
        <div className='scroll-down scroll-down-left'>
          <span>scroll down</span>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fal'
            data-icon='arrow-down'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='svg-inline--fa fa-arrow-down fa-w-14 fa-5x'
          >
            <path
              fill='currentColor'
              d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
              className=''
            ></path>
          </svg>
        </div>
        <div className='scroll-down'>
          <span>scroll down</span>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fal'
            data-icon='arrow-down'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='svg-inline--fa fa-arrow-down fa-w-14 fa-5x'
          >
            <path
              fill='currentColor'
              d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
              className=''
            ></path>
          </svg>
        </div>
      </section>
      <section
        ref={ref}
        style={isMobile ? { display: 'flex' } : portfolioBackImgStyle}
        id='section-portfolio'
      >
        <MyFlipBook inView={inView} />
      </section>
      <section id='section-skills'>
        <h1 className='header-subheading-text'>ToolBox</h1>
        <Cloud containerProps={props.containerProps} options={props.options}>
          {cloudIcons}
        </Cloud>
        <div className='scroll-down scroll-down-skills scroll-down-left'>
          <span>Made it</span>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fal'
            data-icon='arrow-down'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='svg-inline--fa fa-arrow-down fa-w-14 fa-5x'
          >
            <path
              fill='currentColor'
              d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
              className=''
            ></path>
          </svg>
        </div>
        <div className='scroll-down scroll-down-skills'>
          <span>Made it</span>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fal'
            data-icon='arrow-down'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='svg-inline--fa fa-arrow-down fa-w-14 fa-5x'
          >
            <path
              fill='currentColor'
              d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
              className=''
            ></path>
          </svg>
        </div>
      </section>
      <section
        id='section-contactMe'
        className='section-content section'
        style={portfolioBackImgStyle}
      >
        <h1 className='header-subheading-text'>Contact Me</h1>
        <div className='contact-container'>
          <div>form here</div>
          <MyMap customOptions={customOptions} />
        </div>
      </section>
    </div>
  )
}
