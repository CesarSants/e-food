import logoEFood from '../../assets/images/EfoodLogo.svg'
import { HeaderHomeBar, Content, Carrinho, Info } from './styles'
import back from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

const HeaderRes = () => (
  <HeaderHomeBar style={{ backgroundImage: `url(${back})` }}>
    <Content className="container">
      <Info>
        <Link to={'/'}>Restaurantes</Link>
      </Info>
      <Link to={'/'}>
        <img src={logoEFood} alt="EPLAY" />
      </Link>

      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </Content>
  </HeaderHomeBar>
)

export default HeaderRes
