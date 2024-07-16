import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { SearchBlock } from './components/SearchBlock/SearchBlock'
import btnBack from '../src/assets/images/btnBack.svg'
import cls from './App.module.scss'
import { useContext } from 'react'
import { AppContext } from './components/Providers/AppProvider'

export const App = () => {
  const { isCartOpen, isLikedOpen, setIsLikedOpen, likedSneakers, searchValue, filteredSneakers } =
    useContext(AppContext)
  return (
    <div className={cls.wrapper}>
      {isCartOpen && <Drawer />}

      <Header />

      <div className={cls.content}>
        {isLikedOpen ? (
          <>
            <div className={cls.likedTop}>
              <img onClick={() => setIsLikedOpen(!isLikedOpen)} src={btnBack} alt='Back' />
              <h1>Мои закладки</h1>
            </div>

            {likedSneakers.length >= 1 ? (
              <div className={cls.contentBottom}>
                {likedSneakers.map((sneaker) => (
                  <Card key={sneaker.id} {...sneaker} />
                ))}
              </div>
            ) : (
              <div className={cls.contentBottom}>КУПИ КРОССОВКИ НИЩЕБРОД</div>
            )}
          </>
        ) : (
          <>
            <div className={cls.contentTop}>
              <h1>{searchValue ? `Поиск по: ${searchValue}` : 'Все кроссовки'}</h1>
              <SearchBlock />
            </div>

            <div className={cls.contentBottom}>
              {filteredSneakers.map((sneaker) => (
                <Card key={sneaker.id} {...sneaker} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
