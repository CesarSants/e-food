import { Restaurante } from '../../pages/Home'
import Product from '../Product'

import { List, Container } from './styles'

export type Props = {
  title: string
  background: 'white' | 'pink'
  restaurantes: Restaurante[]
  id?: string
}

const ProductsList = ({
  background,
  restaurantes,
  id
}: Omit<Props, 'title'>) => {
  return (
    <Container id={id} background={background}>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <Product
              key={restaurante.id}
              titulo={restaurante.titulo}
              destacado={restaurante.destacado}
              tipo={restaurante.tipo}
              descricao={restaurante.descricao}
              capa={restaurante.capa}
              avaliacao={restaurante.avaliacao}
              id={restaurante.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
