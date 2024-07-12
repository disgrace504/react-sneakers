import heartUnlikedSvg from '../../assets/images/heart-unliked.svg'
import btnAdd from '../../assets/images/btn+.svg'
import sneakerSvg from '../../assets/images/sneakers/1.jpg'
import { memo } from 'react'

import cls from './Card.module.scss'

export const Card = memo(() => {
  return (
    <div className={cls.card}>
      <div className={cls.favorite}>
        <img src={heartUnlikedSvg} alt='Unliked' />
      </div>
      <img className={cls.sneakerImg} src={sneakerSvg} alt='Sneaker' />
      <h5 className={cls.sneakerNameText}>Мужские Кроссовки Nike Blazer Mid Suede</h5>

      <div className={cls.priceBox}>
        <div className={cls.priceTextBox}>
          <span className={cls.priceText}>Цена:</span>
          <b className={cls.price}>12 999 руб.</b>
        </div>
        <button className={cls.btnAddFavorite}>
          <img className={cls.btnAddImg} src={btnAdd} alt='Add' />
        </button>
      </div>
    </div>
  )
})
