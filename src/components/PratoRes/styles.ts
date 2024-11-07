import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  position: relative;

  > img {
    height: 167px;
    width: 304px;
    overflow-y: hidden;
    object-fit: cover;
    /* object-position: center; */
    object-position: 50% 50%; // porcentagem afeta so as que exedem a altura determinada enquando por px afeta todas
    /* object-position: 50% -20px; */
    vertical-align: bottom;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    /* max-height: 359px; */
  }

  .cont {
    padding: 0;

    /* p:nth-child(3) {
      display: none;
    } */
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: inline-block;
  justify-content: end;
  line-height: 18px;
  margin: 8px 0;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 8px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.desktop}) {
    -webkit-line-clamp: 4;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Botao = styled.span`
  background-color: ${cores.pink};
  color: ${cores.pinkChoque};
  height: 24px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 790px) {
    align-items: center;
  }

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: block;
  position: relative;
  max-width: 100%;
  z-index: 1;
  background-color: ${cores.pinkChoque};
  max-width: 1024px;

  @media (max-width: 790px) {
    overflow-y: auto;

    > img {
      position: absolute;
      right: 0;
    }
  }

  > img {
    float: right;
    margin: 8px;
    cursor: pointer;
  }
`

export const MainContent = styled.div`
  padding: 32px;
  display: flex;

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    margin: 16px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  img {
    display: flex;
    width: 280px;
    height: 280px;
    object-fit: cover;
    overflow: hidden;
  }

  div:first-child {
    width: 280px;
    height: 280px;
  }

  div:nth-child(2) {
    margin-left: 24px;
  }

  ${Botao} {
    width: auto;
    display: inline-flex;
    padding: 4px 7px;
    border-radius: 8px;

    @media (max-width: 352px) {
      padding: 20px 7px;
      text-align: center;
    }
  }

  @media (max-width: 790px) {
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* position: relative; */

    max-width: 80vw;
    height: 80vw;

    div:nth-child(2) {
      margin-left: 0;
      padding-bottom: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      border-radius: 8px;
      /* width: auto;
      height: auto;
      max-height: 280px;
      max-width: 280px; */
    }

    h4 {
      margin-top: 24px;
    }

    ${Botao} {
    }
  }
`
