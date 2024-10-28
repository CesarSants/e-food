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
import close1 from '../../assets/images/close 1.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export interface PratoProps {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  prato: PratoProps
}

const PratoUn = ({ prato }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  const fechaModal = () => {
    setModalEstaAberto(false)
  }

  return (
    <>
      <Card key={prato.id}>
        <img src={prato.foto} alt={prato.nome} />
        <div className="cont">
          <Titulo>{prato.nome}</Titulo>
          <Descricao>{prato.descricao}</Descricao>
          <Botao onClick={() => setModalEstaAberto(true)}>
            Adicionar ao carrinho
          </Botao>
        </div>
      </Card>
      <Modal className={modalEstaAberto ? 'visible' : ''}>
        <ModalContent className="container">
          <img src={close1} onClick={() => setModalEstaAberto(false)} alt="" />
          <MainContent>
            <div>
              <img src={prato.foto} alt={prato.nome} />
            </div>
            <div>
              <h4>{prato.nome}</h4>
              <p>
                {prato.descricao} <br /> <br />
                {prato.porcao}
              </p>
              <Botao
                title="Clique aqui para adicionar ao carrinho"
                onClick={addToCart}
              >
                Adicionar ao carrinho - {formataPreco(prato.preco)}
              </Botao>
            </div>
          </MainContent>
        </ModalContent>
        <div className="overlay" onClick={fechaModal}></div>
      </Modal>
    </>
  )
}

export default PratoUn
