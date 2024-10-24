import HeaderRes from '../../components/HeaderRes'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Restaurante } from '../Home'
import PratoResList from '../../components/PratoResList'
import Banner from '../../components/Banner'
// import $ from 'jquery'

const InternoRestaurante = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`) //requisicao deve ser feita no arquivo page
    //     .then((res) => res.json())
    //     .then((res) => setRestaurante(res)) //fetch        //melhor opação
    // }, [id])
    //______________________________________________________________
    const xhr = new XMLHttpRequest() //ajax sem jquery
    xhr.open(
      'GET',
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`,
      true
    )
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.responseText)
        setRestaurante(res)
      } else {
        console.error(`Erro na requisição: ${xhr.statusText}`)
      }
    }
    xhr.onerror = function () {
      console.error('Erro na requisição AJAX')
    }
    xhr.send()
  }, [id])
  //______________________________________________________________

  //   $.ajax(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`) //ajax com jquery
  //     .done(function (resposta) {
  //       setRestaurante(resposta)
  //     })
  //     .fail(function (jqXHR) {
  //       console.error(`Erro na requisição: ${jqXHR.statusText}`)
  //     })
  // }, [id])
  // ______________________________________________________________________

  //   Compiled with problems:                    //erro apos tentar instalar o jquery
  // ×
  // ERROR in ./src/pages/Categories/index.tsx 10:0-23
  // Module not found: Error: Can't resolve 'jquery' in 'C:\Users\CesarSantos\Documents\fullSJAVA\Front-End\modulo-35-projeto-6\ex\src\pages\Categories'

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderRes />
      <Banner
        key={id}
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      {restaurante && (
        <PratoResList background="pink" cardapio={restaurante.cardapio} />
      )}
    </>
  )
}

export default InternoRestaurante
