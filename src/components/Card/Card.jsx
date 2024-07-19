import React, { memo, useContext, useState, useEffect } from 'react'
import btnUnliked from '../../assets/images/heart-unliked.svg'
import btnLiked from '../../assets/images/heart-liked.svg'
import btnAdd from '../../assets/images/btn+.svg'
import btnAddChecked from '../../assets/images/btn+Cheked.svg'
import { AppContext } from '../../Providers/AppProvider'
import cls from './Card.module.scss'
import { CardLoader } from './../CardLoader/CardLoader'

export const Card = memo(({ id, title, imageUrl, price }) => {
  const { onAddToCart, onAddToLiked, cartSneakers, likedSneakers, isLoadingSneakers } = useContext(AppContext)

  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [isAddedToLiked, setIsAddedToLiked] = useState(false)

  useEffect(() => {
    cartSneakers.some((sneakers) => sneakers.id === id) ? setIsAddedToCart(true) : setIsAddedToCart(false)
  }, [cartSneakers, id])

  useEffect(() => {
    likedSneakers.some((sneakers) => sneakers.id === id) ? setIsAddedToLiked(true) : setIsAddedToLiked(false)
  }, [likedSneakers, id])

  const onClickAdd = () => {
    onAddToCart({ id, title, imageUrl, price })
    setIsAddedToCart(!isAddedToCart)
  }

  const onClickLike = () => {
    onAddToLiked({ id, title, imageUrl, price })
    setIsAddedToLiked(!isAddedToLiked)
  }

  return isLoadingSneakers ? (
    <CardLoader />
  ) : (
    <div className={cls.card}>
      <div onClick={onClickLike} className={cls.btnLike}>
        <img src={isAddedToLiked ? btnLiked : btnUnliked} alt='Unliked' />
      </div>
      <img className={cls.sneakerImg} src={imageUrl} alt='Sneaker' />
      <h5 className={cls.sneakerTitle}>{title}</h5>

      <div className={cls.cardFooter}>
        <div className={cls.priceList}>
          <span className={cls.priceTitle}>Цена:</span>
          <p className={cls.price}>{price} руб.</p>
        </div>
        <div onClick={onClickAdd}>
          <img className={cls.btnAdd} src={isAddedToCart ? btnAddChecked : btnAdd} alt='Add to cart' />
        </div>
      </div>
    </div>
  )
})
