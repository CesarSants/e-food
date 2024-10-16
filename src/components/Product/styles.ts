import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  /* color: ${cores.pinkChoque}; */

  padding: 0px;
  position: relative;

  /* ${TagContainer} {
    /* margin-right: 8px; */
  > img {
    height: 217px;
    width: 472px;
    overflow-y: hidden;
    object-fit: cover;
    /* object-position: center; */
    object-position: 50% 50%; // porcentagem afeta so as que exedem a altura determinada enquando por px afeta todas
    /* object-position: 50% -20px; */
    vertical-align: bottom;
  }

  .cont {
    padding: 8px;
    border: 1px solid ${cores.pinkChoque};
    border-top: 0px;
    box-sizing: border-box;
    /* color: ${cores.pinkChoque}; */
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  justify-content: end;
  line-height: 21px;
  color: ${cores.pinkChoque};
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Botao = styled.span`
  background-color: ${cores.pinkChoque};
  color: ${cores.pink};
  width: 82px;
  height: 24px;
  padding: 6px;
  display: block;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    top: 4px;
    left: 6px;
    height: 16px;
    width: 70px;
    display: block;
  }
`
