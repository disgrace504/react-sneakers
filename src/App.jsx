import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { SearchBlock } from './components/SearchBlock/SearchBlock'
import cls from './App.module.scss'
import { createContext, useState, useEffect, useCallback } from 'react'
import { fetchSneakers } from './components/api/fetchSneakers'

const sneakersUrl = process.env.REACT_APP_SNEAKERS_URL_API

export const AppContext = createContext()

export const App = () => {
  const [sneakers, setSneakers] = useState([])
  const [cartSneakers, setCartSneakers] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const getSneakers = async () => {
      const response = await fetchSneakers(sneakersUrl)
      setSneakers(response)
    }
    getSneakers()

    const getCartSneakers = async () => {
      const response = JSON.parse(localStorage.getItem('cartSneakers')) || []
      setCartSneakers(response)
    }
    getCartSneakers()
  }, [])

  const onAddToCart = useCallback(
    (obj) => {
      const updatedCart = [...cartSneakers, obj]
      localStorage.setItem('cartSneakers', JSON.stringify(updatedCart))
      setCartSneakers(updatedCart)
    },
    [cartSneakers]
  )

  const onRemoveFromCart = useCallback(
    (id) => {
      const updatedCart = cartSneakers.filter((item) => item.id !== id)
      localStorage.setItem('cartSneakers', JSON.stringify(updatedCart))
      setCartSneakers(updatedCart)
    },
    [cartSneakers]
  )

  const filteredSneakers = sneakers.filter((sneaker) => sneaker.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartSneakers,
        setCartSneakers,
        onAddToCart,
        searchValue,
        setSearchValue,
        onRemoveFromCart,
      }}>
      <div className={cls.wrapper}>
        {isCartOpen && <Drawer />}

        <Header />

        <div className={cls.content}>
          <div className={cls.contentTop}>
            <h1>{searchValue ? `Поиск по: ${searchValue}` : 'Все кроссовки'}</h1>
            <SearchBlock />
          </div>

          <div className={cls.contentBottom}>
            {filteredSneakers.map((sneaker) => (
              <Card key={sneaker.id} {...sneaker} />
            ))}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}
