import PratoUn from '../PratoRes'
import { List, Container } from './styles'

export interface Prato {
  //solução do problema, criar um tipo para o cardapio  e outro para o restante e importar um no outro
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Props {
  background: 'white' | 'pink'
  cardapio: Prato[]
}

const PratoResList = ({ background, cardapio }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {cardapio.map((prato) => (
          <PratoUn prato={prato} key={prato.id} />
        ))}
      </List>
    </div>
  </Container>
)

export default PratoResList
