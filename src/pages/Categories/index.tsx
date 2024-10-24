import HeaderRes from '../../components/HeaderRes'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Restaurante } from '../Home'
import PratoResList from '../../components/PratoResList'
import Banner from '../../components/Banner'

const InternoRestaurante = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`) //requisicao deve ser feita no arquivo page
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  return (
    <>
      <HeaderRes />
      <Banner />
      {restaurante && (
        <PratoResList background="pink" cardapio={restaurante.cardapio} />
      )}
    </>
  )
}

export default InternoRestaurante
