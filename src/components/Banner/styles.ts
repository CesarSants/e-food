import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  z-index: -2;

  ::after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.16);
    z-index: -1;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`
export const BannerContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: bold;
  max-width: 450px;
  padding-bottom: 32px;
  line-height: 37px;
  margin-top: auto;
  bottom: 0;
`

export const Classe = styled.p`
  font-size: 32px;
  margin-top: 24px;
  font-weight: 100;
  line-height: 37px;

  span {
    text-decoration: line-through;
  }
`
