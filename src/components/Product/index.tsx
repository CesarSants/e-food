import Tag from '../Tag'
import star from '../../assets/images/star.png'

import { Card, Descricao, Titulo, Infos, Botao } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  category: string
  title: string
  description: string
  image: string
  rate: string
  infos: string[]
  link: string
}

const Product = ({
  category,
  title,
  description,
  image,
  rate,
  infos,
  link
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="cont">
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
        <Tag>{category}</Tag>
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag size="transparent">
        {rate}
        <img src={star} alt="estrela" />
      </Tag>
      <Descricao>{description}</Descricao>
      <Botao>
        <Link to={'/produto'}>{link}</Link>
      </Botao>
    </div>
  </Card>
)

export default Product
