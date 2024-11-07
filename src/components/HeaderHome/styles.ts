import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderHomeBar = styled.header`
  background-color: ${cores.cinza};
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  margin: 0 auto;
  display: block;
  text-align: center;

  img {
    margin-top: 24px;
    width: 125px;
    height: 100%;
  }

  p {
    color: ${cores.pinkChoque};
    max-width: 539px;
    font-size: 36px;
    font-weight: 900;
    margin: 138px auto 0;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 28px;
      margin: 90px auto 0;
    }
  }
`
