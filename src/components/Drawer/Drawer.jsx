import cls from './Drawer.module.scss'
import btnRemoveSvg from '../../assets/images/cartBtnX.svg'
import arrowSvg from '../../assets/images/arrow.svg'
import emptyCartSvg from '../../assets/images/emptyCart.svg'
import { memo, useContext } from 'react'
import { AppContext } from '../../Providers/AppProvider'

export const Drawer = memo(() => {
  const { isCartOpen, setIsCartOpen, cartSneakers, onRemoveFromCart } = useContext(AppContext)

  return (
    <div className={cls.overlay}>
      <div className={cls.drawer}>
        <h2 className={cls.drawerTitle}>
          Корзина
          <img onClick={() => setIsCartOpen(!isCartOpen)} className={cls.btnRemove} src={btnRemoveSvg} alt='close' />
        </h2>

        {cartSneakers.length >= 1 ? (
          <>
            <div className={cls.sneakerCart}>
              {cartSneakers.map((sneaker) => (
                <div key={sneaker.id} className={cls.sneaker}>
                  <img className={cls.sneakerImg} src={sneaker.imageUrl} alt='sneakers' />
                  <div className={cls.sneakerCartTitle}>
                    <p className={cls.sneakerTitle}>{sneaker.title}</p>
                    <p className={cls.sneakerPrice}>{sneaker.price} руб.</p>
                  </div>
                  <img
                    onClick={() => onRemoveFromCart(sneaker.id)}
                    className={cls.btnRemove}
                    src={btnRemoveSvg}
                    alt='remove'
                  />
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
                Оформить заказ <img className={cls.order} src={arrowSvg} alt='arrow'></img>
              </button>
            </div>
          </>
        ) : (
          <div className={cls.emptyCart}>
            <img src={emptyCartSvg} alt='EMPTY' />
            <h2>Корзина пуста =(</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ!!!!</p>
            <button onClick={() => setIsCartOpen(!isCartOpen)} className={cls.btnOrder}>
              Вернуться назад <img className={cls.back} src={arrowSvg} alt='arrow'></img>
            </button>
          </div>
        )}
      </div>
    </div>
  )
})
