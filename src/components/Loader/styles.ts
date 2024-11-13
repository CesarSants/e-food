import styled from 'styled-components'
import { cores } from '../../styles'

type ContainerProps = {
  backgroundColor?: string
}

export const Container = styled.div<ContainerProps>`
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || cores.pinkback};
`

// background-color: currentColor;
