import { Cloud, renderSimpleIcon, ICloud } from 'react-icon-cloud'
import { useMediaQuery } from 'react-responsive'

const CloudTagComp = (props: any) => {
  const { icons } = props
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1241 })

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
    icons.map((icon: any) => {
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
  const constructedProps = makeProps()
  const cloudIcons = makeIcons()

  return (
    <Cloud
      containerProps={constructedProps.containerProps}
      options={constructedProps.options}
    >
      {cloudIcons}
    </Cloud>
  )
}
export default CloudTagComp
