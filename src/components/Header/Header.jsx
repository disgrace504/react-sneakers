export const Header = () => {
  return (
    <header>
      <div className='logoNameBox'>
        <img width={40} height={40} src='/img/logo.png' alt='' />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul>
        <li>
          <img width={18} height={17.18} src='/img/card.svg' alt='' />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={17.9} height={16.26} src='/img/like.svg' alt='' />
          <span>Закладки</span>
        </li>
        <li>
          <img width={18} height={18} src='/img/user.svg' alt='' />
        </li>
      </ul>
    </header>
  )
}
