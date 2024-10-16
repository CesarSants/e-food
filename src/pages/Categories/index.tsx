// import ProductsList from '../../components/ProductsList'
// import Game from '../../models/Restaurante'
// import resident from '../../assets/images/resident.png'
// import diablo from '../../assets/images/diablo.png'
// import zelda from '../../assets/images/zelda.png'
// import starWars from '../../assets/images/star_wars.png'
// import fifa from '../../assets/images/ea-sports-fc-24-capa.png'
// import street from '../../assets/images/street.png'
// import assassins from '../../assets/images/assassins2.png'
// import battlefield from '../../assets/images/battlefield.jpg'
import fantasy from '../../assets/images/Final_Fantasy.png'
import PratoResList from '../../components/PratoResList'
// import hogwarts from '../../assets/images/hogwarts.png'
// import duty from '../../assets/images/call-of-duty.png'
// import uncharted from '../../assets/images/Uncharted.png'
// import god from '../../assets/images/good-of-war.jpg'
// import nba from '../../assets/images/nba.png'
// import topspin from '../../assets/images/topspin2.png'
// import madden from '../../assets/images/madden.jpg'

import Prato from '../../models/Prato'

const pratos1: Prato[] = [
  {
    id: 1,
    title: 'Final Fantasy VII Rebirth',
    description:
      'Final Fantasy VII Rebirth é o segundo lançamento do projeto de remake de Final Fantasy VII...',
    image: fantasy,
    link: '#'
  },
  {
    id: 2,
    title: 'Final Fantasy VII Rebirth',
    description:
      'Final Fantasy VII Rebirth é o segundo lançamento do projeto de remake de Final Fantasy VII...',
    image: fantasy,
    link: '#'
  },
  {
    id: 3,
    title: 'Final Fantasy VII Rebirth',
    description:
      'Final Fantasy VII Rebirth é o segundo lançamento do projeto de remake de Final Fantasy VII...',
    image: fantasy,
    link: '#'
  },
  {
    id: 4,
    title: 'Final Fantasy VII Rebirth',
    description:
      'Final Fantasy VII Rebirth é o segundo lançamento do projeto de remake de Final Fantasy VII...',
    image: fantasy,
    link: '#'
  },
  {
    id: 5,
    title: 'Final Fantasy VII Rebirth',
    description:
      'Final Fantasy VII Rebirth é o segundo lançamento do projeto de remake de Final Fantasy VII...',
    image: fantasy,
    link: '#'
  },
  {
    id: 6,
    title: 'Final Fantasy VII Rebirth',
    description:
      'Final Fantasy VII Rebirth é o segundo lançamento do projeto de remake de Final Fantasy VII...',
    image: fantasy,
    link: '#'
  }
]

const InternoRestaurante = () => (
  <>
    <PratoResList background="pink" pratos={pratos1} />
  </>
)

export default InternoRestaurante
