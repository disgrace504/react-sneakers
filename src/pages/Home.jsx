import { useContext } from 'react'
import { AppContext } from '../Providers/AppProvider'
import { SearchBlock } from './../components/SearchBlock/SearchBlock'
import { CardList } from '../components/CardList/CardList'
import cls from './pages.module.scss'

export const Home = () => {
  const { searchValue, filteredSneakers } = useContext(AppContext)

  return (
    <>
      <div className={cls.contentTop}>
        <h1>{searchValue ? `Поиск по: ${searchValue}` : 'Все кроссовки'}</h1>
        <SearchBlock />
      </div>
      <CardList arrSneakers={filteredSneakers} />
    </>
  )
}
