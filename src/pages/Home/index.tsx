import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/Restaurante'
import japa from '../../assets/images/japa.png'
import italiano from '../../assets/images/italiano.png'

const home: Restaurante[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi ',
    rate: '4.9',
    infos: ['Destaque da semana'],
    image: japa,
    link: 'Saiba mais'
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: [],
    image: italiano,
    link: 'Saiba mais'
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: [],
    image: italiano,
    link: 'Saiba mais'
  },
  {
    id: 4,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: [],
    image: italiano,
    link: 'Saiba mais'
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: [],
    image: italiano,
    link: 'Saiba mais'
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    infos: [],
    image: italiano,
    link: 'Saiba mais'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList restaurantes={home} title="Promoções" background="white" />
  </>
)

export default Home
