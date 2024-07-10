import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'

export const App = () => {
  return (
    <div className='wrapper clear'>
      <Drawer />

      <Header />

      <div className='content'>
        <div className='contentBox'>
          <h1>Все кроссовки</h1>
          <div className='searchBlock'>
            <img src='/img/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>

        <div className='cardBox'>
          <Card />
        </div>
      </div>
    </div>
  )
}
