import cls from './App.module.scss'
import { useContext } from 'react'
import { AppContext } from './Providers/AppProvider'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { Home } from './pages/Home'
import { LikedSneakers } from './pages/LikedSneakers'

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
        </Routes>
      </div>
    </div>
  )
}
