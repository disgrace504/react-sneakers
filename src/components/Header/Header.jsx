import logoPng from '../../assets/images/logo.png'
import userSvg from '../../assets/images/user.svg'
import likedSvg from '../../assets/images/like.svg'
import cardSvg from '../../assets/images/card.svg'

import cls from './Header.module.scss'

export const Header = () => {
  return (
    <header>
      <div className={cls.logoNameBox}>
        <img width={40} height={40} src={logoPng} alt='' />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul>
        <li>
          <img width={18} height={17.18} src={userSvg} alt='' />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={17.9} height={16.26} src={likedSvg} alt='' />
          <span>Закладки</span>
        </li>
        <li>
          <img width={18} height={18} src={cardSvg} alt='' />
        </li>
      </ul>
    </header>
  )
}
