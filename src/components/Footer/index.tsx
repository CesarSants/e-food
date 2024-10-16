import { Container, Links, Linka } from './styles'
import logo from '../../assets/images/EfoodLogo.svg'
import face from '../../assets/images/face.svg'
import insta from '../../assets/images/instagram.svg'
import x from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="" />
      <Links>
        <Linka>
          <a href="#">
            <img src={insta} alt="EPLAY" />
          </a>
        </Linka>
        <Linka>
          <a href="#">
            <img src={face} alt="EPLAY" />
          </a>
        </Linka>
        <Linka>
          <a href="#">
            <img src={x} alt="EPLAY" />
          </a>
        </Linka>
      </Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
