import Prato from '../../models/Prato'
// import Restaurante from '../../models/Restaurante'
import PratoUn from '../PratoRes'

import { List, Container } from './styles'

export type Props = {
  title: string
  background: 'white' | 'pink'
  pratos: Prato[]
}

const PratoResList = ({ background, pratos }: Omit<Props, 'title'>) => (
  <Container background={background}>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <PratoUn
            key={prato.id}
            title={prato.title}
            description={prato.description}
            image={prato.image}
            link={prato.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default PratoResList
