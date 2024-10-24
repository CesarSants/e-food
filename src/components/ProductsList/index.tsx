import { Restaurante } from '../../pages/Home'
import Product from '../Product'

import { List, Container } from './styles'

export type Props = {
  title: string
  background: 'white' | 'pink'
  restaurantes: Restaurante[]
}

const ProductsList = ({ background, restaurantes }: Omit<Props, 'title'>) => {
  return (
    <Container background={background}>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <Product
              titulo={restaurante.titulo}
              destacado={restaurante.destacado}
              tipo={restaurante.tipo}
              descricao={restaurante.descricao}
              capa={restaurante.capa}
              avaliacao={restaurante.avaliacao}
              key={restaurante.id}
              id={restaurante.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
