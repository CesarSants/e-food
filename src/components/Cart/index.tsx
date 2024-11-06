import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  InputGroup,
  SuccessContainer,
  DeliveryContainer,
  Row
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, clearItems } from '../../store/reducers/cart'
import { formataPreco } from '../Product'
import { usePurchaseMutation } from '../../services/api'
import { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
// import InputMask from 'react-input-mask'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  // const [checkout, setCheckout] = useState(false)
  // const [payment, SetPayment] = useState(false)

  //   const pagamento = () => {
  //     setCheckout(false)
  //     SetPayment(true)
  //   }
  //   const endereco = () => {
  //     setCheckout(true)
  //     SetPayment(false)
  //   }

  const dispatch = useDispatch()

  const [currentStep, setCurrentStep] = useState('cart')
  const goToCart = () => setCurrentStep('cart')
  const goToDelivery = () => setCurrentStep('delivery')
  const goToPayment = () => setCurrentStep('payment')
  const goToEnd = () => setCurrentStep('end')
  const goToDeliveryFromCart = () => {
    if (items.length >= 1) {
      setCurrentStep('delivery')
    } else {
      closeCart()
      dispatch(clearItems())
    }
  }

  useEffect(() => {
    if (isSuccess) {
      goToEnd()
    }
  }, [isSuccess])

  const validateMaskedField = (
    value: string,
    minLength: number,
    maxLength: number,
    minMessage?: string,
    maxMessage?: string
  ) => {
    const digits = value.replace(/\D/g, '')
    if (digits.length < minLength) {
      return minMessage
    }
    if (digits.length > maxLength) {
      return maxMessage
    }
    return true
  }

  const form = useFormik({
    initialValues: {
      recibidor: '',
      rua: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      recibidor: Yup.string()
        .min(5, 'O nome precisar ter pelo menos 5 caracteres')
        .required('O campo é obrigatorio'),
      rua: Yup.string()
        .required('O campo é obrigatorio')
        .min(3, 'A rua precisar ter pelo menos 3 caracteres'),
      cidade: Yup.string()
        .min(2, 'Preencha o nome da cidade')
        .required('O campo é obrigatorio'),
      numero: Yup.string()
        .required('O campo é obrigatorio')
        .min(1, 'Digite o número'),
      complemento: Yup.string(),
      cardOwner: Yup.string()
        .required('O campo é obrigatorio')
        .min(5, 'O nome precisar ter pelo menos 5 caracteres'),
      cpfCardOwner: Yup.string()
        .required('O campo é obrigatorio')
        .test(
          'cpfCardOwner',
          'O CPF deve estar completo',
          (value) => validateMaskedField(value ?? '', 11, 11) === true
        ),
      cardDisplayName: Yup.string()
        .required('O campo é obrigatorio')
        .min(5, 'O nome precisar ter pelo menos 5 caracteres'),
      cardNumber: Yup.string()
        .required('O campo é obrigatorio')
        .min(19, 'O campo deve conter o numero completo do cartão')
        .max(19, 'O campo deve conter o numero completo do cartão'),
      expiresMonth: Yup.string()
        .required('O campo é obrigatorio')
        .test(
          'expiresMonth',
          'O campo deve conter os 2 numeros do mês',
          (value) => validateMaskedField(value ?? '', 2, 2) === true
        ),
      expiresYear: Yup.string()
        .required('O campo é obrigatorio')
        .test(
          'expiresYear',
          'O campo deve conter os 2 ultimos numeros do ano',
          (value) => validateMaskedField(value ?? '', 2, 2) === true
        ),

      cardCode: Yup.string()
        .required('O campo é obrigatorio')
        .test(
          'cardCode',
          'Deve conter 3 numeros',
          (value) => validateMaskedField(value ?? '', 3, 3) === true
        )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.recibidor,
          address: {
            description: values.rua,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const closeCartFromEnd = () => {
    dispatch(close())
    goToCart()
    dispatch(clearItems())
  }

  const closeCart = () => {
    dispatch(close())
    goToCart()
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s?/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
  }

  const formatSecurityCode = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 3)
  }

  const formatMonth = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 2)
  }

  const formatYear = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 4)
  }

  const formatZipCode = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{3})/, '$1-$2')
      .slice(0, 9)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay className={isOpen ? 'is-open' : ''} onClick={closeCart} />
      <Sidebar>
        {/* maneira correta porem sem resposta da api, portando fica carregando*/}
        {/* {data && isSuccess && currentStep === 'end' ? ( */}
        {currentStep === 'end' ? (
          <SuccessContainer>
            {/* <h3>Pedido realizado - {data.orderId}</h3> */}
            <h3>Pedido realizado - xxx</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <button
              className="buttonCart"
              onClick={closeCartFromEnd}
              type="button"
            >
              Concluir
            </button>
          </SuccessContainer>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {currentStep === 'cart' ? (
              <div>
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
                <button
                  className="buttonCart"
                  type="button"
                  title="Clique aqui para continuar com a compra"
                  onClick={goToDeliveryFromCart}
                >
                  {items.length >= 1
                    ? 'Continuar com a entrega'
                    : 'Volte para as compras'}
                </button>
              </div>
            ) : currentStep === 'delivery' ? (
              <DeliveryContainer>
                <h3>Entrega</h3>
                <InputGroup>
                  <div className="group">
                    <label htmlFor="recibidor">Quem irá receber</label>
                    <input
                      id="recibidor"
                      type="text"
                      name="recibidor"
                      value={form.values.recibidor}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('recibidor') ? 'error' : ''}
                    />
                  </div>
                  <small>
                    {getErrorMessage('recibidor', form.errors.recibidor)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <div className="group">
                    <label htmlFor="rua">Endereço</label>
                    <input
                      id="rua"
                      type="text"
                      name="rua"
                      value={form.values.rua}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('rua') ? 'error' : ''}
                    />
                  </div>
                  <small>{getErrorMessage('rua', form.errors.rua)}</small>
                </InputGroup>
                <InputGroup>
                  <div className="group">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      id="cidade"
                      type="text"
                      name="cidade"
                      value={form.values.cidade}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cidade') ? 'error' : ''}
                    />
                  </div>
                  <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
                </InputGroup>
                <Row>
                  <InputGroup>
                    <div className="group">
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={(e) => {
                          form.handleChange(e)
                          form.setFieldValue(
                            'cep',
                            formatZipCode(e.target.value)
                          )
                        }}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                      />
                    </div>
                    <small>{getErrorMessage('cep', form.errors.cep)}</small>
                  </InputGroup>
                  <InputGroup>
                    <div className="group">
                      <label htmlFor="numero">Número</label>
                      <input
                        id="numero"
                        type="text"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('numero') ? 'error' : ''}
                      />
                    </div>
                    <small>
                      {getErrorMessage('numero', form.errors.numero)}
                    </small>
                  </InputGroup>
                </Row>
                <InputGroup className="last">
                  <div className="group">
                    <label htmlFor="complemento">Complemento(opcional)</label>
                    <input
                      id="complemento"
                      type="text"
                      name="complemento"
                      value={form.values.complemento}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complemento') ? 'error' : ''
                      }
                    />
                  </div>
                  <small>
                    {getErrorMessage('complemento', form.errors.complemento)}
                  </small>
                </InputGroup>
                <button
                  title="Clique aqui para preencher os dados de pagamento"
                  type="button"
                  className="buttonCart"
                  onClick={goToPayment}
                >
                  Continuar com o pagamento
                </button>
                <button
                  title="Clique aqui para voltar ao carrinho"
                  type="button"
                  className="buttonCart"
                  onClick={goToCart}
                >
                  Voltar ao carrinho
                </button>
              </DeliveryContainer>
            ) : currentStep === 'payment' ? (
              <DeliveryContainer>
                <h3>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                </h3>
                <InputGroup>
                  <div className="group">
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardDisplayName') ? 'error' : ''
                      }
                    />
                  </div>
                  <small>
                    {getErrorMessage(
                      'cardDisplayName',
                      form.errors.cardDisplayName
                    )}
                  </small>
                </InputGroup>
                <Row className="bigRow">
                  <InputGroup>
                    <div className="group">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={(e) => {
                          form.handleChange(e)
                          form.setFieldValue(
                            'cardNumber',
                            formatCardNumber(e.target.value)
                          )
                        }}
                        onKeyDown={(e) => {
                          if (
                            !/[0-9]/.test(e.key) &&
                            ![
                              'Backspace',
                              'Tab',
                              'ArrowLeft',
                              'ArrowRight'
                            ].includes(e.key)
                          ) {
                            e.preventDefault()
                          }
                        }}
                        maxLength={19}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </div>
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <div className="group">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={(e) => {
                          form.handleChange(e)
                          form.setFieldValue(
                            'cardSecurityCode',
                            formatSecurityCode(e.target.value)
                          )
                        }}
                        onKeyDown={(e) => {
                          if (
                            !/[0-9]/.test(e.key) &&
                            ![
                              'Backspace',
                              'Tab',
                              'ArrowLeft',
                              'ArrowRight'
                            ].includes(e.key)
                          ) {
                            e.preventDefault()
                          }
                        }}
                        maxLength={3}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </div>
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row className="lastCard">
                  <InputGroup>
                    <div className="group">
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={(e) => {
                          form.handleChange(e)
                          form.setFieldValue(
                            'expiresMonth',
                            formatMonth(e.target.value)
                          )
                        }}
                        onBlur={form.handleBlur}
                        maxLength={2}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                      />
                    </div>
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <div className="group">
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={(e) => {
                          form.handleChange(e)
                          form.setFieldValue(
                            'expiresYear',
                            formatYear(e.target.value)
                          )
                        }}
                        onBlur={form.handleBlur}
                        maxLength={2}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                      />
                    </div>
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroup>
                </Row>
                <button
                  className="buttonCart"
                  title="Clique aqui para finalizar o pagamento"
                  type="submit"
                  onClick={goToEnd}
                  // disabled={!form.isValid || form.isSubmitting}
                >
                  Finalizar pagamento
                </button>
                <button
                  className="buttonCart"
                  title="Clique aqui para editar o endereço"
                  type="button"
                  onClick={goToDelivery}
                >
                  Voltar para a edição de endereço
                </button>
              </DeliveryContainer>
            ) : (
              <h3>Carregando...</h3>
            )}
          </form>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
