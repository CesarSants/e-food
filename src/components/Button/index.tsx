import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'buttonRestaurante' | 'buttonPrato'
  title: string
  to?: string
  onClick?: () => void
  children: string
  id?: string
  htmlType?: 'button' | 'submit' | 'reset'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  id,
  htmlType
}: Props) => {
  if (type === 'buttonRestaurante') {
    return (
      <ButtonContainer type={htmlType} title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink
      id={id}
      to={to as string}
      title={title}
      type="buttonPrato"
      onClick={onClick}
    >
      {children}
    </ButtonLink> // se nao utilizasse o react router dom poderia utilizar as = "div" por exemplo, mas nesse caso criamos outra classe "buttonlink" e utilizamos "to"
  )
}

export default Button
