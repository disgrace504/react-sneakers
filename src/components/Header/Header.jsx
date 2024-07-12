import logoPng from '../../assets/images/logo.png'
import userSvg from '../../assets/images/user.svg'
import likedSvg from '../../assets/images/like.svg'
import cardSvg from '../../assets/images/card.svg'
import { memo } from 'react'

import cls from './Header.module.scss'

export const Header = memo(() => {
  return (
    <header>
      <div className={cls.logoNameBox}>
        <img className={cls.logoImgPng} src={logoPng} alt='' />
        <div>
          <h3 className={cls.shopNameText}>React Sneakers</h3>
          <p className={cls.shopNameDescription}>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className={cls.navigationIconsList}>
        <li className={cls.navigationIcons}>
          <img className={cls.navigationIconsProfileSvg} src={userSvg} alt='Profile' />
          <span>1205 руб.</span>
        </li>
        <li className={cls.navigationIcons}>
          <img className={cls.navigationIconsFavoriteSvg} src={likedSvg} alt='Favorites' />
          <span>Закладки</span>
        </li>
        <li className={cls.navigationIcons}>
          <img className={cls.navigationIconsCartSvg} src={cardSvg} alt='Shopping Cart' />
        </li>
      </ul>
    </header>
  )
})
