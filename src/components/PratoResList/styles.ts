import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'pratos'>>`
  padding: 32px 0 120px;
  background-color: ${(props) =>
    props.background === 'white' ? cores.pinkback : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'white' ? cores.branca : cores.preta};

    p {
      color: ${(props) =>
        props.background === 'white' ? cores.pinkChoque : cores.preta};
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 48px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
