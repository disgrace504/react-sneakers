import { memo } from 'react'
import cls from './StatusInfo.module.scss'
import arrowSvg from '../../assets/images/arrow.svg'

export const StatusInfo = memo(({ title, description, onClickBack, image }) => {
  return (
    <div className={cls.infoContent}>
      <img className={cls.infoImg} src={image} alt='=(' />
      <h2 className={cls.infoTitle}>{title}</h2>
      <p className={cls.infoDescription}>{description}</p>
      <button onClick={onClickBack} className={cls.backButton}>
        Вернуться к покупкам! <img className={cls.backArrow} src={arrowSvg} alt='arrow'></img>
      </button>
    </div>
  )
})
