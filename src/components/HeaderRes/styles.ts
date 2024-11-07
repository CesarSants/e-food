import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderHomeBar = styled.header`
  background-color: ${cores.cinza};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }

  a {
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 125px;
      height: auto;
      margin-top: 63px;
      margin-bottom: 65px;
      top: 0;
    }
  }
`
export const Info = styled.p`
  margin-top: 82px;
  margin-bottom: 83px;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 25px;
  }

  a {
    color: ${cores.pinkChoque};
    text-decoration: none;
  }
`

export const Carrinho = styled.a`
  margin-top: 82px;
  margin-bottom: 83px;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.pinkChoque};
  display: flex;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 25px;
    margin-top: 25px;
    align-items: center;
  }
`
