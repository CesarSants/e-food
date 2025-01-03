import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.pink};
  padding: 40px 0;
  font-size: 14px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;

    p {
      max-width: 480px;
      font-size: 10px;
      font-weight: 400;
      color: ${cores.pinkChoque};
      margin-top: 80px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      p:last-child {
        margin-top: 24px;
      }
    }
  }
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 32px;
  padding: 0;

  @media (max-width: ${breakpoints.desktop}) {
    text-align: center;
    justify-content: center;
  }
`

export const Linka = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`
