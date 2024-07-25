import React, { useContext, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from './Providers/AppProvider'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { Home } from './pages/Home'
import { LikedSneakers } from './pages/LikedSneakers'
import cls from './App.module.scss'
import { Profile } from './pages/Profile'

export const App = () => {
  const { isCartOpen } = useContext(AppContext)
  return (
    <div className={cls.wrapper}>
      {isCartOpen && <Drawer />}

      <Header />

      <div className={cls.content}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/likedSneakers' element={<LikedSneakers />} />

          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}
