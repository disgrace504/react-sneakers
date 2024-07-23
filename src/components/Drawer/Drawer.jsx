import cls from './Drawer.module.scss'
import btnRemoveSvg from '../../assets/images/cartBtnX.svg'
import arrowSvg from '../../assets/images/arrow.svg'
import { memo, useContext, useState } from 'react'
import { AppContext } from '../../Providers/AppProvider'
import { StatusInfo } from '../StatusInfo/StatusInfo'
import emptyCartImg from '../../assets/images/emptyCart.svg'
import orderImg from '../../assets/images/ordered.svg'

export const Drawer = memo(() => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartSneakers,
    onRemoveFromCart,
    cartSum,
    cartSumTax,
    onCreateOrder,
    onReturnToShopping,
    orderedSneakers,
    getRandomOrderNumber,
    isOrdered,
  } = useContext(AppContext)

  console.log(isOrdered)
  return (
    <div className={cls.overlay}>
      <div className={cls.drawer}>
        <h2 className={cls.drawerTitle}>
          Корзина
          <img onClick={() => setIsCartOpen(!isCartOpen)} className={cls.btnRemove} src={btnRemoveSvg} alt='close' />
        </h2>

        {orderedSneakers.length >= 1 && (
          <StatusInfo
            title='Заказ оформлен!'
            description={'Ваш заказ #' + getRandomOrderNumber(10, 456) + ' скоро будет передан курьерской доставке'}
            image={orderImg}
            onClickBack={onReturnToShopping}
          />
        )}

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
                  <p>{cartSum} руб.</p>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <p> {cartSumTax} руб.</p>
                </li>
              </ul>

              <button onClick={() => onCreateOrder(cartSneakers)} className={cls.btnOrder}>
                Оформить заказ <img className={cls.order} src={arrowSvg} alt='arrow'></img>
              </button>
            </div>
          </>
        ) : (
          <StatusInfo
            title='Корзина пуста =('
            description='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            image={emptyCartImg}
            onClickBack={onReturnToShopping}
          />
        )}
      </div>
    </div>
  )
})
