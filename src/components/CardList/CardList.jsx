import { Card } from '../Card/Card'
import cls from './CardList.module.scss'

export const CardList = ({ arrSneakers }) => {
  return (
    <div className={cls.cardList}>
      {arrSneakers.map((sneaker) => (
        <Card key={sneaker.id} {...sneaker} />
      ))}
    </div>
  )
}
