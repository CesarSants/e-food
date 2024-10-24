import { Imagem, BannerContainer, Titulo, Classe } from './styles'
// import italiano from '../../assets/images/imagem-de-fundo.png'

type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Banner = ({
  capa,
  tipo,
  titulo
}: Omit<
  Restaurante,
  'avaliacao' | 'cardapio' | 'descricao' | 'destacado' | 'id'
>) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <BannerContainer>
      <div className="container">
        <Classe>{tipo}</Classe>
        <Titulo>{titulo}</Titulo>
      </div>
    </BannerContainer>
  </Imagem>
)

export default Banner
