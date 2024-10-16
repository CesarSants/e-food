import { Card, Descricao, Titulo, Botao } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  link: string
}

const PratoUn = ({ title, description, image, link }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="cont">
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>
        <Link to={'/produto'}>{link}</Link>
      </Botao>
    </div>
  </Card>
)

export default PratoUn
