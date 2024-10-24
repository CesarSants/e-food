import { formataPreco } from '../Product'
import {
  Card,
  Descricao,
  Titulo,
  Botao,
  Modal,
  ModalContent,
  MainContent
} from './styles'
import close from '../../assets/images/close 1.png'
import { useState } from 'react'

export interface PratoProps {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const PratoUn = ({ id, foto, nome, descricao, porcao, preco }: PratoProps) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Card key={id}>
        <img src={foto} alt={nome} />
        <div className="cont">
          <Titulo>{nome}</Titulo>
          <Descricao>{descricao}</Descricao>
          <Botao onClick={() => setModalEstaAberto(true)}>
            Adicionar ao carrinho
          </Botao>
        </div>
      </Card>
      <Modal className={modalEstaAberto ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={close} onClick={() => setModalEstaAberto(false)} alt="" />
          <MainContent>
            <div>
              <img src={foto} alt={nome} />
            </div>
            <div>
              <h4>{nome}</h4>
              <p>
                {descricao} <br /> <br />
                {porcao}
              </p>
              <Botao>Adicionar ao carrinho - {formataPreco(preco)}</Botao>
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
