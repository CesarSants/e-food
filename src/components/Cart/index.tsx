import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  // Quantity,
  CartItem
} from './styles'
// import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay className={isOpen ? 'is-open' : ''} onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                title="Clique aqui para remover do carrinho"
                type="button"
              />
            </CartItem>
          ))}
        </ul>
        {items.length >= 1 ? (
          <Prices>
            Valor total
            <span>{formataPreco(getTotalPrice())}</span>
          </Prices>
        ) : null}

        <Button
          type="buttonPrato"
          title="Clique aqui para continuar com a compra"
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
