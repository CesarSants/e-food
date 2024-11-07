import logoEFood from '../../assets/images/EfoodLogo.svg'
import { HeaderHomeBar, Content } from './styles'
import back from '../../assets/images/fundo.png'

const HeaderHome = () => (
  <HeaderHomeBar style={{ backgroundImage: `url(${back})` }}>
    <Content className="container">
      <img src={logoEFood} alt="EFOOD" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </Content>
  </HeaderHomeBar>
)

export default HeaderHome
