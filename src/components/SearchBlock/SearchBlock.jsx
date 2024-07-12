import searchSvg from '../../assets/images/search.svg'
import cls from './SearchBlock.module.scss'
import { memo } from 'react'

export const SearchBlock = memo(() => {
  return (
    <div className={cls.searchBlock}>
      <img src={searchSvg} alt='Search' />
      <input className={cls.searchInput} type='text' placeholder='Поиск...' />
    </div>
  )
})
