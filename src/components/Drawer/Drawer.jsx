import btnRemoveSvg from '../../assets/images/cartBtnX.svg'
import sneakerImg from '../../assets/images/sneakers/1.jpg'
import arrowSvg from '../../assets/images/arrow.svg'
import { memo, useContext } from 'react'
import { AppContext } from '../../App'

import cls from './Drawer.module.scss'

export const Drawer = memo(() => {
  const { cartOpn, setCartOpn, cartSneakers, setCartSneakers } = useContext(AppContext)
  const onClickClose = () => {
    setCartOpn(!cartOpn)
  }

  return (
    <div className={cls.overlay}>
      <div className={cls.drawer}>
        <h2 className={cls.drawerTitle}>
          Корзина <img onClick={onClickClose} className={cls.btnRemove} src={btnRemoveSvg} alt='close' />
        </h2>

        <div className={cls.sneakerCart}>
          {cartSneakers.map((sneaker) => (
            <div className={cls.sneaker}>
              <img className={cls.sneakerImg} src={sneaker.imageUrl} alt='sneakers' />
              <div className={cls.sneakerCartTitle}>
                <p className={cls.sneakerTitle}>{sneaker.title}</p>
                <p className={cls.sneakerPrice}>{sneaker.price} руб.</p>
              </div>
              <img className={cls.btnRemove} src={btnRemoveSvg} alt='remove' />
            </div>
          ))}
        </div>

        <div className={cls.cartTotal}>
          <ul className={cls.cartTotalList}>
            <li>
              <span>Итого: </span>
              <div></div>
              <p>21 498 руб.</p>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <p>1074 руб.</p>
            </li>
          </ul>

          <button className={cls.btnOrder}>
            Оформить заказ <img src={arrowSvg} alt='arrow'></img>
          </button>
        </div>
      </div>
    </div>
  )
})
