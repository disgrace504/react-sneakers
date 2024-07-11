import heartUnlikedSvg from '../../assets/images/heart-unliked.svg'
import btnAdd from '../../assets/images/btn+.svg'
import sneakerSvg from '../../assets/images/sneakers/1.jpg'

import cls from './Card.module.scss'

export const Card = () => {
  return (
    <div className={cls.card}>
      <div className={cls.favorite}>
        <img src={heartUnlikedSvg} alt='Unliked' />
      </div>
      <img width={133} height={112} src={sneakerSvg} alt='Sneaker' />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>

      <div className={cls.priceTextBox}>
        <div>
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className={cls.button}>
          <img width={11} height={11} src={btnAdd} alt='Add' />
        </button>
      </div>
    </div>
  )
}
