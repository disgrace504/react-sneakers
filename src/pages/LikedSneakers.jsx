import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Providers/AppProvider'
import { CardList } from '../components/CardList/CardList'
import cls from './pages.module.scss'
import btnBack from '../assets/images/btnBack.svg'

export const LikedSneakers = () => {
  const { likedSneakers } = useContext(AppContext)

  return (
    <>
      <div className={cls.likedTop}>
        <Link to='/'>
          <img src={btnBack} alt='Back' />
        </Link>
        <h1>Мои закладки</h1>
      </div>

      {likedSneakers.length >= 1 ? (
        <CardList arrSneakers={likedSneakers} />
      ) : (
        <div className={cls.contentBottom}>КУПИ КРОССОВКИ НИЩЕБРОД</div>
      )}
    </>
  )
}
