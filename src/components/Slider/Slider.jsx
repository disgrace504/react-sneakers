import cls from './Slider.module.scss'
import slideButtonImg from '../../assets/images/sliderArrow.svg'
import { useState } from 'react'

export const Slider = () => {
  const slideImg1 = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf1f7742566789.57d05a35870fc.jpg'
  const slideImg2 = 'https://papik.pro/uploads/posts/2021-11/1636142068_48-papik-pro-p-logotip-adidas-foto-51.jpg'
  const slideImg3 = 'https://i1.t4s.cz/galleries/95/124299.jpg'
  const [slidePosition, setSlidePosition] = useState(0)

  const onClickPrev = () => {
    setSlidePosition(slidePosition === 0 ? -2000 : slidePosition + 1000)
  }

  const onClickNext = () => {
    setSlidePosition(slidePosition === -2000 ? 0 : slidePosition - 1000)
  }

  return (
    <>
      <div className={cls.slider}>
        <img onClick={onClickPrev} className={cls.prevButton} src={slideButtonImg} alt='prev' />
        <div className={cls.currentSlide}>
          <div style={{ transform: `translateX(${slidePosition}px)` }} className={cls.sliderContent}>
            <img src={slideImg1} alt='slide1' className={cls.slideImg}></img>
            <img src={slideImg2} alt='slide2' className={cls.slideImg}></img>
            <img src={slideImg3} alt='slide3' className={cls.slideImg}></img>
          </div>
        </div>
        <img onClick={onClickNext} className={cls.nextButton} src={slideButtonImg} alt='next' />
      </div>
    </>
  )
}
