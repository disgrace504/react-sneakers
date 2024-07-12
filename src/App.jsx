import { Card } from './components/Card/Card'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { SearchBlock } from './components/SearchBlock/SearchBlock'

export const App = () => {
  return (
    <div className='wrapper'>
      <Drawer />

      <Header />

      <div className='content'>
        <div className='contentBox'>
          <h1 className='contentText'>Все кроссовки</h1>
          <SearchBlock />
        </div>

        <div className='cardBox'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}
