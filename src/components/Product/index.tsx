import Tag from '../Tag'
import star from '../../assets/images/star.png'

import { Card, Descricao, Titulo, Infos, Botao } from './styles'
import { Link } from 'react-router-dom'

// import { useParams } from 'react-router-dom'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Array<{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }>
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Omit<Props, 'cardapio'>) => {
  const getTag = (
    restaurante: Omit<
      Props,
      'cardapio' | 'id' | 'titulo' | 'tipo' | 'avaliacao' | 'descricao' | 'capa'
    >
  ) => {
    if (restaurante.destacado) {
      return 'Destaque da semana'
    }
    return ''
  }

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <div className="cont">
        <Infos>
          {destacado && <Tag>{getTag({ destacado })}</Tag>}
          <Tag>{tipo}</Tag>
        </Infos>
        <Titulo>{titulo}</Titulo>
        <Tag size="transparent">
          {avaliacao}
          <img src={star} alt="estrela" />
        </Tag>
        <Descricao>{descricao}</Descricao>
        <Botao>
          <Link to={`/InternoRestaurante/${id}`}>Saiba mais</Link>
          {/* <Link to={`/InternoRestaurante/${title}`}>{link}</Link> */}
        </Botao>
      </div>
    </Card>
  )
}

export default Product
