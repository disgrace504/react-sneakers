import logo from '../../assets/images/logo.png'
import profileImg from '../../assets/images/user.svg'
import likedImg from '../../assets/images/like.svg'
import cartImg from '../../assets/images/card.svg'
import { memo, useContext } from 'react'

import cls from './Header.module.scss'
import { AppContext } from '../Providers/AppProvider'

export const Header = memo(() => {
  const { isCartOpen, setIsCartOpen, isLikedOpen, setIsLikedOpen } = useContext(AppContext)

  return (
    <header className={cls.header}>
      <div className={cls.shopLogo}>
        <img className={cls.logoImg} src={logo} alt='' />
        <div>
          <h3 className={cls.shopTitle}>React Sneakers</h3>
          <p className={cls.shopDescription}>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className={cls.navIconsList}>
        <li>
          <img onClick={() => setIsCartOpen(!isCartOpen)} className={cls.cartImg} src={cartImg} alt='Shopping Cart' />
          <span>1205 руб.</span>
        </li>
        <li>
          <img onClick={() => setIsLikedOpen(!isLikedOpen)} className={cls.likedImg} src={likedImg} alt='Favorites' />
        </li>
        <li>
          <img className={cls.profileImg} src={profileImg} alt='Profile' />
        </li>
      </ul>
    </header>
  )
})
