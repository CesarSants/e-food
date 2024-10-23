import pizza from '../../assets/images/pizza.png'
import oi from '../../assets/images/Uncharted.png'

import PratoResList from '../../components/PratoResList'
import Banner from '../../components/Banner'

import Prato from '../../models/Prato'
import HeaderRes from '../../components/HeaderRes'
import { useParams } from 'react-router-dom'

const pratos1: Prato[] = [
  {
    id: 1,
    title: 'Pizza Marguerita1',
    description:
      '1A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: 'Adicionar ao carrinho',
    price: 0
  },
  {
    id: 2,
    title: 'Pizza Marguerita2',
    description:
      '2A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oi,
    link: 'Adicionar ao carrinho',
    price: 0
  },
  {
    id: 3,
    title: 'Pizza Marguerita3',
    description:
      '3A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: 'Adicionar ao carrinho',
    price: 0
  },
  {
    id: 4,
    title: 'Pizza Marguerita4',
    description:
      '4A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oi,
    link: 'Adicionar ao carrinho',
    price: 0
  },
  {
    id: 5,
    title: 'Pizza Marguerita5',
    description:
      '5A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    link: 'Adicionar ao carrinho',
    price: 0
  },
  {
    id: 6,
    title: 'Pizza Marguerita6',
    description:
      '6A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: oi,
    link: 'Adicionar ao carrinho',
    price: 0
  }
]

const InternoRestaurante = () => {
  const teste = useParams()

  return (
    <>
      <HeaderRes />
      {teste.id}
      <Banner />
      <PratoResList background="pink" pratos={pratos1} />
    </>
  )
}

export default InternoRestaurante
