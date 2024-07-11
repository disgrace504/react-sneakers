import searchSvg from '../../assets/images/search.svg'
import cls from './SearchBlock.module.scss'

export const SearchBlock = () => {
  return (
    <div className={cls.searchBlock}>
      <img src={searchSvg} alt='Search' />
      <input type='text' placeholder='Поиск...' />
    </div>
  )
}
