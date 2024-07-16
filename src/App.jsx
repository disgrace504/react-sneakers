import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { SearchBlock } from './components/SearchBlock/SearchBlock'
import cls from './App.module.scss'
import { createContext, useState, useEffect } from 'react'
import { FetchSneakers } from './components/api/FetchSneakers'
import { PostSneakersCart } from './components/api/PostSneakersCart'

const sneakersUrl = process.env.REACT_APP_SNEAKERS_URL_API
const cartUrl = process.env.REACT_APP_CART_URL_API

export const AppContext = createContext()

export const App = () => {
  const [sneakers, setSneakers] = useState([])
  const [cartSneakers, setCartSneakers] = useState([])
  const [isCartOpn, setIsCartOpn] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const getSneakers = async () => {
      const resp = await FetchSneakers(sneakersUrl)
      setSneakers(resp)
    }
    getSneakers()
  }, [])

  const onAddToCart = (obj) => {
    PostSneakersCart(obj, cartUrl)
    setCartSneakers((prev) => [...prev, obj])
  }

  const filteredSneakers = (sneakers) => {
    return sneakers.filter((sneaker) => sneaker.title.toLowerCase().includes(searchValue.toLowerCase()))
  }

  return (
    <AppContext.Provider
      value={{ isCartOpn, setIsCartOpn, cartSneakers, setCartSneakers, onAddToCart, searchValue, setSearchValue }}>
      <div className={cls.wrapper}>
        {isCartOpn && <Drawer />}

        <Header />

        <div className={cls.content}>
          <div className={cls.contentTop}>
            <h1>{searchValue ? `Поиск по: ${searchValue}` : 'Все кроссовки'}</h1>
            <SearchBlock />
          </div>

          <div className={cls.contentBottom}>
            {filteredSneakers(sneakers).map((sneaker) => (
              <Card key={sneaker.id} {...sneaker} />
            ))}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}
