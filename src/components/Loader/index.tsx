import { RingLoader } from 'react-spinners'
import { Container } from './styles'

type LoaderProps = {
  loaderColor?: string
  backgroundColor?: string
}

const Loader = ({ loaderColor = '#fa0d0d', backgroundColor }: LoaderProps) => (
  <Container backgroundColor={backgroundColor}>
    <RingLoader color={loaderColor} />
  </Container>
)

export default Loader
