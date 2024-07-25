import cls from './Slider.module.scss'
import slideButtonImg from '../../assets/images/sliderArrow.svg'
import { useState } from 'react'

export const Slider = () => {
  const slideImages = [
    { imgUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cf1f7742566789.57d05a35870fc.jpg' },
    { imgUrl: 'https://papik.pro/uploads/posts/2021-11/1636142068_48-papik-pro-p-logotip-adidas-foto-51.jpg' },
    { imgUrl: 'https://i1.t4s.cz/galleries/95/124299.jpg' },
  ]

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
            {slideImages.map((slideImage, index) => (
              <img key={index} src={slideImage.imgUrl} alt={'slide ' + index} className={cls.slideImg}></img>
            ))}
          </div>
        </div>
        <img onClick={onClickNext} className={cls.nextButton} src={slideButtonImg} alt='next' />
      </div>
    </>
  )
}
