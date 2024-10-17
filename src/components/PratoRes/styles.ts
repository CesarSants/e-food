import styled from 'styled-components'
import { cores } from '../../styles'

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
  }

  .cont {
    padding: 0;
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
