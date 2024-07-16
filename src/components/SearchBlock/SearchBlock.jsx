import btnRemoveSvg from '../../assets/images/cartBtnX.svg'
import searchSvg from '../../assets/images/search.svg'
import { AppContext } from '../Providers/AppProvider'
import cls from './SearchBlock.module.scss'
import { memo, useContext } from 'react'


export const SearchBlock = memo(() => {
  const { searchValue, setSearchValue } = useContext(AppContext)

  return (
    <div className={cls.search}>
      <img src={searchSvg} alt='Search' />
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={cls.searchInput}
        type='text'
        placeholder='Поиск...'></input>
      {searchValue && (
        <img onClick={() => setSearchValue('')} className={cls.btnRemove} src={btnRemoveSvg} alt='clear' />
      )}
    </div>
  )
})
