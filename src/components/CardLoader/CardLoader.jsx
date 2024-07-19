import ContentLoader from 'react-content-loader'
import cls from './CardLoader.module.scss'

export const CardLoader = () => (
  <ContentLoader
    className={cls.card}
    speed={2}
    width={150}
    height={187}
    viewBox='0 0 150 187'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'>
    <rect x='118' y='155' rx='8' ry='8' width='32' height='32' />
    <rect x='0' y='0' rx='20' ry='20' width='150' height='91' />
    <rect x='0' y='106' rx='5' ry='5' width='150' height='15' />
    <rect x='0' y='126' rx='5' ry='5' width='93' height='15' />
    <rect x='0' y='163' rx='5' ry='5' width='80' height='24' />
  </ContentLoader>
)
