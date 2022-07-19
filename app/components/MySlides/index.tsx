import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type MySlideProps = {
  slides: Array<JSX.Element>
}
const MySlides = (props: MySlideProps) => {
  const { slides } = props
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className='mobile-slides-container'>
      <p className='section-main-heading'>Work</p>
      <Slider {...settings}>{slides.map(slide => slide)}</Slider>
    </div>
  )
}
export default MySlides
