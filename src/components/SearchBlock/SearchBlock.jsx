import btnRemoveSvg from '../../assets/images/cartBtnX.svg'
import searchSvg from '../../assets/images/search.svg'
import cls from './SearchBlock.module.scss'
import { memo, useContext } from 'react'
import { AppContext } from '../../App'

export const SearchBlock = memo(() => {
  const { searchValue, setSearchValue } = useContext(AppContext)

  const onClickClear = () => {
    setSearchValue('')
  }

  return (
    <div className={cls.search}>
      <img src={searchSvg} alt='Search' />
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={cls.searchInput}
        type='text'
        placeholder='Поиск...'></input>
      {searchValue && <img onClick={onClickClear} className={cls.btnRemove} src={btnRemoveSvg} alt='clear' />}
    </div>
  )
})
