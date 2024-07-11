import cartBtnRemoveSvg from '../../assets/images/cartBtnX.svg'
import cartItemImgJpg from '../../assets/images/sneakers/1.jpg'
import arrowSvg from '../../assets/images/arrow.svg'

import cls from './Drawer.module.scss'

export const Drawer = () => {
  return (
    <div className={cls.overlay}>
      <div className={cls.drawer}>
        <h2>
          Корзина <img className={cls.removeBtn} src={cartBtnRemoveSvg} alt='remove' />
        </h2>

        <div className={cls.items}>
          <div className={cls.cartItem}>
            <img className={cls.cartItemImg} src={cartItemImgJpg} alt='sneakers' />
            <div className={cls.cartItemTextBox}>
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className={cls.removeBtn} src={cartBtnRemoveSvg} alt='remove' />
          </div>
        </div>

        <div className={cls.cartTotalBlock}>
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>

          <button className={cls.orderButton}>
            Оформить заказ <img src={arrowSvg} alt='arrow'></img>
          </button>
        </div>
      </div>
    </div>
  )
}
