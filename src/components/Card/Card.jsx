import btnUnliked from '../../assets/images/heart-unliked.svg'
import btnLiked from '../../assets/images/heart-liked.svg'
import btnAdd from '../../assets/images/btn+.svg'
import btnAddChecked from '../../assets/images/btn+Cheked.svg'
import { memo, useContext, useState } from 'react'

import cls from './Card.module.scss'
import { AppContext } from '../../Providers/AppProvider'

export const Card = memo(({ id, title, imageUrl, price }) => {
  const { onAddToCart, onAddToLiked } = useContext(AppContext)

  const [isAdded, setIsAdded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const onClickAdd = () => {
    onAddToCart({ id, title, imageUrl, price })
    setIsAdded(!isAdded)
  }
  const onClickLike = () => {
    onAddToLiked({ id, title, imageUrl, price })
    setIsLiked(!isLiked)
  }

  return (
    <div className={cls.card}>
      <div onClick={onClickLike} className={cls.btnLike}>
        <img src={isLiked ? btnLiked : btnUnliked} alt='Unliked' />
      </div>
      <img className={cls.sneakerImg} src={imageUrl} alt='Sneaker' />
      <h5 className={cls.sneakerTitle}>{title}</h5>

      <div className={cls.cardFooter}>
        <div className={cls.priceList}>
          <span className={cls.priceTitle}>Цена:</span>
          <p className={cls.price}>{price} руб.</p>
        </div>
        <div onClick={onClickAdd}>
          <img className={cls.btnAdd} src={isAdded ? btnAddChecked : btnAdd} alt='Add to cart' />
        </div>
      </div>
    </div>
  )
})
