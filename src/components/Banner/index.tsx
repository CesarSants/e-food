import { Imagem, BannerContainer, Titulo, Classe } from './styles'
import italiano from '../../assets/images/imagem-de-fundo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${italiano})` }}>
    <BannerContainer>
      <div className="container">
        <Classe>Italiana</Classe>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
    </BannerContainer>
  </Imagem>
)

export default Banner
