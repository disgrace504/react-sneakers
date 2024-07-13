import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { SearchBlock } from './components/SearchBlock/SearchBlock'
import cls from './App.module.scss'
import { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

export const App = () => {
  const [sneakers, setSneakers] = useState([])
  const [cartSneakers, setCartSneakers] = useState([])
  const [cartOpn, setCartOpn] = useState(false)

  useEffect(() => {
    fetch('https://6692c973346eeafcf46e2f31.mockapi.io/sneakers').then((res) => {
      return res.json().then((json) => {
        setSneakers(json)
      })
    })
  }, [])

  const onAddToCart = (obj) => {
    cartSneakers.push(obj)
    console.log(cartSneakers)
  }

  return (
    <AppContext.Provider value={{ cartOpn, setCartOpn, cartSneakers, setCartSneakers, onAddToCart }}>
      <div className={cls.wrapper}>
        {cartOpn && <Drawer />}

        <Header />

        <div className={cls.content}>
          <div className={cls.contentTop}>
            <h1>Все кроссовки</h1>
            <SearchBlock />
          </div>

          <div className={cls.contentBottom}>
            {sneakers.map((sneaker) => (
              <Card key={sneaker.id} {...sneaker} />
            ))}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}
