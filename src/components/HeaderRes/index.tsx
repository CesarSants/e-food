import logoEFood from '../../assets/images/EfoodLogo.svg'
import { HeaderHomeBar, Content, Carrinho, Info } from './styles'
import back from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderRes = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderHomeBar style={{ backgroundImage: `url(${back})` }}>
      <Content className="container">
        <Info>
          <Link to={'/'}>Restaurantes</Link>
        </Info>
        <Link to={'/'}>
          <img src={logoEFood} alt="EPLAY" />
        </Link>
        {items.length > 1 ? (
          <Carrinho onClick={openCart}>
            {items.length} produtos no carrinho
          </Carrinho>
        ) : items.length === 1 ? (
          <Carrinho onClick={openCart}>
            {items.length} produto no carrinho
          </Carrinho>
        ) : (
          <Carrinho onClick={openCart}> O carrinho está vazio</Carrinho>
        )}
      </Content>
    </HeaderHomeBar>
  )
}

export default HeaderRes
