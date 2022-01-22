import React from 'react'
import myHorse from '../../images/home/myHorse.png'

type PageCoverPropsType = {
  number?: string
  backCover?: boolean
  frontCover?: boolean
}
const PageCover = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<PageCoverPropsType>
>((props, ref) => {
  const { number, backCover, frontCover, children } = props

  const myHorseImgStyle = {
    backgroundImage: `url(${myHorse})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'round',
    display: 'flex'
  }

  return (
    <div
      className={`${backCover ? 'back-cover' : ''} ${
        frontCover ? 'front-cover' : ''
      } page-cover page`}
      style={myHorseImgStyle}
      ref={ref}
      data-density='hard'
    >
      <div
        className={`${backCover ? 'shimmer' : ''} ${
          frontCover ? 'shimmer' : ''
        } page-content`}
      >
        <h2>{props.children}</h2>
      </div>
    </div>
  )
})

export default PageCover
