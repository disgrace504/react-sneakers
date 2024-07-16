import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { fetchSneakers } from '../api/fetchSneakers'

const sneakersUrl = process.env.REACT_APP_SNEAKERS_URL_API

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [sneakers, setSneakers] = useState([])
  const [cartSneakers, setCartSneakers] = useState([])
  const [likedSneakers, setLikedSneakers] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLikedOpen, setIsLikedOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const getSneakers = async () => {
      const response = await fetchSneakers(sneakersUrl)
      setSneakers(response)
    }
    getSneakers()

    const getCartSneakers = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartSneakers')) || []
      setCartSneakers(cartItems)
    }
    getCartSneakers()

    const getLikedSneakers = () => {
      const likedItems = JSON.parse(localStorage.getItem('likedSneakers')) || []
      setLikedSneakers(likedItems)
    }
    getLikedSneakers()
  }, [])

  const onAddToCart = useCallback(
    (object) => {
      const updatedCart = [...cartSneakers, object]
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

  const onAddToLiked = useCallback(
    (object) => {
      const updatedCart = [...likedSneakers, object]
      localStorage.setItem('likedSneakers', JSON.stringify(updatedCart))
      setLikedSneakers(updatedCart)
    },
    [likedSneakers]
  )

  const filteredSneakers = useMemo(
    () => sneakers.filter((sneaker) => sneaker.title.toLowerCase().includes(searchValue.toLowerCase())),
    [sneakers, searchValue]
  )
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
        likedSneakers,
        setLikedSneakers,
        onAddToLiked,
        isLikedOpen,
        setIsLikedOpen,
        filteredSneakers,
      }}>
      {children}
    </AppContext.Provider>
  )
}
