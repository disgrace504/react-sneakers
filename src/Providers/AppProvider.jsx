import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { fetchSneakers } from '../components/api/fetchSneakers'

const sneakersUrl = process.env.REACT_APP_SNEAKERS_URL_API

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isLoadingSneakers, setIsLoadingSneakers] = useState(false)
  const [sneakers, setSneakers] = useState([])
  const [cartSneakers, setCartSneakers] = useState([])
  const [likedSneakers, setLikedSneakers] = useState([])
  const [orderedSneakers, setOrderedSneakers] = useState([])
  const [isOrdered, setIsOrdered] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const cartSum = useMemo(() => cartSneakers.reduce((sum, current) => sum + current.price, 0), [cartSneakers])

  const cartSumTax = (cartSum * 0.05).toFixed(2)
  const cartSumHeader = +cartSum + +cartSumTax

  const filteredSneakers = useMemo(
    () => sneakers.filter((sneaker) => sneaker.title.toLowerCase().includes(searchValue.toLowerCase())),
    [sneakers, searchValue]
  )

  useEffect(() => {
    const getSneakers = async () => {
      setIsLoadingSneakers(true)
      const response = await fetchSneakers(sneakersUrl)
      setSneakers(response)
      setIsLoadingSneakers(false)
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

    const getOrderedSneakers = () => {
      const orderedItems = JSON.parse(localStorage.getItem('orderedSneakers')) || []
      setOrderedSneakers(orderedItems)
    }
    getOrderedSneakers()
  }, [])

  const onAddToCart = useCallback(
    (object) => {
      if (cartSneakers.find((item) => item.id === object.id)) {
        const updatedCart = cartSneakers.filter((item) => item.id !== object.id)
        localStorage.setItem('cartSneakers', JSON.stringify(updatedCart))
        setCartSneakers(updatedCart)
      } else {
        const updatedCart = [...cartSneakers, object]
        localStorage.setItem('cartSneakers', JSON.stringify(updatedCart))
        setCartSneakers(updatedCart)
      }
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
      if (likedSneakers.find((item) => item.id === object.id)) {
        const updatedLike = likedSneakers.filter((item) => item.id !== object.id)
        localStorage.setItem('likedSneakers', JSON.stringify(updatedLike))
        setLikedSneakers(updatedLike)
      } else {
        const updatedLike = [...likedSneakers, object]
        localStorage.setItem('likedSneakers', JSON.stringify(updatedLike))
        setLikedSneakers(updatedLike)
      }
    },
    [likedSneakers]
  )

  const onCreateOrder = useCallback(
    (cartSneakers) => {
      const updatedOrder = [...orderedSneakers, cartSneakers]
      localStorage.setItem('orderedSneakers', JSON.stringify(updatedOrder))
      setOrderedSneakers(updatedOrder)
      onRemoveFromCart()
      setIsOrdered(true)
    },
    [orderedSneakers]
  )

  const onReturnToShopping = () => {
    setIsCartOpen(false)
    setIsOrdered(false)
  }

  function getRandomOrderNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

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
        filteredSneakers,
        cartSum,
        cartSumTax,
        cartSumHeader,
        isLoadingSneakers,
        getRandomOrderNumber,
        onReturnToShopping,
        onCreateOrder,
        orderedSneakers,
        isOrdered,
      }}>
      {children}
    </AppContext.Provider>
  )
}
