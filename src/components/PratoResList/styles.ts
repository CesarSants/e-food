import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, cores } from '../../styles'
import { Card } from '../PratoRes/styles'

export const Container = styled.section<Omit<Props, 'title' | 'cardapio'>>`
  padding: 56px 0 120px;
  background-color: ${(props) =>
    props.background === 'white' ? cores.pinkback : cores.pinkback};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'white' ? cores.branca : cores.pinkChoque};

    p {
      color: ${(props) =>
        props.background === 'white' ? cores.pinkChoque : cores.pink};
    }

    h3 {
      color: ${(props) =>
        props.background === 'white' ? cores.pinkChoque : cores.pink};
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  /* margin-top: 48px; */

  @media ((max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet})) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
