import cls from './CardList.module.scss'
import { Card } from './../Card/Card'
import { memo, useContext } from 'react'
import { AppContext } from '../../Providers/AppProvider'

export const CardList = memo(({ arrSneakers }) => {
  const { isLoadingSneakers } = useContext(AppContext)
  return (
    <div className={cls.cardList}>
      {(isLoadingSneakers ? [...Array(12)] : arrSneakers).map((sneaker, index) => (
        <Card key={isLoadingSneakers ? index : sneaker.id} {...sneaker} />
      ))}
    </div>
  )
})
