import Restaurante from '../../models/Restaurante'
import Product from '../Product'

import { List, Container } from './styles'

export type Props = {
  title: string
  background: 'white' | 'pink'
  restaurantes: Restaurante[]
}

const ProductsList = ({ background, restaurantes }: Omit<Props, 'title'>) => (
  <Container background={background}>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            category={restaurante.category}
            title={restaurante.title}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            link={restaurante.link}
            rate={restaurante.rate}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
