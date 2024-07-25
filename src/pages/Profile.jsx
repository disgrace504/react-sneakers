import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Providers/AppProvider'
import { CardList } from '../components/CardList/CardList'
import cls from './pages.module.scss'
import btnBack from '../assets/images/btnBack.svg'
import noOrdersImg from '../assets/images/noOrders.png'
import { StatusInfo } from './../components/StatusInfo/StatusInfo'

export const Profile = () => {
  const { orderedSneakers } = useContext(AppContext)

  return (
    <>
      <div className={cls.likedTop}>
        <Link to='/'>
          <img src={btnBack} alt='Back' />
        </Link>
        <h1>Мои заказы</h1>
      </div>

      {orderedSneakers.length >= 1 ? (
        orderedSneakers.map((orders, index) => (
          <div key={index} className={cls.ordersList}>
            <h2 className={cls.ordersTitle}>{'Заказ #' + +(index + 1)}</h2>
            <CardList arrSneakers={orders} />
          </div>
        ))
      ) : (
        <div className={cls.bottomInfo}>
          <StatusInfo
            title='У вас нет заказов'
            image={noOrdersImg}
            description='Вы нищеброд ? Оформите хотя бы один заказ!'
          />
        </div>
      )}
    </>
  )
}
