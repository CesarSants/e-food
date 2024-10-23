import {
  Card,
  Descricao,
  Titulo,
  Botao,
  Modal,
  ModalContent,
  MainContent
} from './styles'
// import { Link } from 'react-router-dom'
import close from '../../assets/images/close 1.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
  link: string
  price: number
}

const PratoUn = ({ title, description, image, link, price }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <div className="cont">
          <Titulo>{title}</Titulo>
          <Descricao>{description}</Descricao>
          {/* <p>{price}</p> */}
          <Botao onClick={() => setModalEstaAberto(true)}>{link}</Botao>
        </div>
      </Card>
      <Modal className={modalEstaAberto ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={close} onClick={() => setModalEstaAberto(false)} alt="" />
          <MainContent>
            <div>
              <img src={image} alt="" />
            </div>
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
              <Botao>Adicionar ao carrinho - {price}</Botao>
            </div>
          </MainContent>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default PratoUn
