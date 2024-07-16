import cls from './Drawer.module.scss'
import btnRemoveSvg from '../../assets/images/cartBtnX.svg'
import arrowSvg from '../../assets/images/arrow.svg'
import { memo, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { FetchSneakers } from './../api/FetchSneakers'

const cartUrl = process.env.REACT_APP_CART_URL_API

export const Drawer = memo(() => {
  const { isCartOpn, setIsCartOpn, cartSneakers, setCartSneakers } = useContext(AppContext)
  const onClickClose = () => {
    setIsCartOpn(!isCartOpn)
  }

  useEffect(() => {
    const getCartSneakers = async () => {
      const resp = await FetchSneakers(cartUrl)
      setCartSneakers(resp)
    }
    getCartSneakers()
  }, [])

  return (
    <div className={cls.overlay}>
      <div className={cls.drawer}>
        <h2 className={cls.drawerTitle}>
          Корзина <img onClick={onClickClose} className={cls.btnRemove} src={btnRemoveSvg} alt='close' />
        </h2>

        <div className={cls.sneakerCart}>
          {cartSneakers.map((sneaker) => (
            <div key={sneaker.id} className={cls.sneaker}>
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
