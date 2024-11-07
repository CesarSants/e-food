import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/lixeira-de-reciclagem.png'

// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: #000;
//   opacity: 0.7;
//   cursor: pointer;
// `

// export const CartContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: flex-end;
//   z-index: 1;
//   transform: translateX(100%);
//   transition: transform 1s ease-in-out;

//   &.is-open {
//     transform: translateX(0);
//   }
// `

//_______________________________________________________________________________________________________

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  opacity: 0;
  cursor: pointer;
  transition: opacity 1s ease;

  &.is-open {
    opacity: 1;
  }
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  transition: transform 1s ease;
  overflow-y: hidden;

  &.is-open {
    transform: translateX(-100%);
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${cores.pinkChoque};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 16px 8px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  .buttonCart {
    width: 100%;
    display: block;
    text-align: center;
    border-radius: 0;
    border: none;
    background-color: ${cores.pink};
    color: ${cores.pinkChoque};
    padding: 4px;
    max-height: 24px;
    height: 100%;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    margin-top: 8px;
  }

  @media (max-width: 500px) {
    max-width: 283px;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.pink};
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  line-height: 16px;

  span {
    display: block;
  }
`
export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${cores.pink};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
    font-weight: 900;
    line-height: 21px;
    color: ${cores.pinkChoque};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${cores.pinkChoque};
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const InputGroup = styled.div`
  display: block;
  margin-bottom: 8px;

  .group {
    display: flex;
    flex-direction: column;

    input {
      background-color: ${cores.pink};
      border: 1px solid ${cores.pink};
      margin-top: 8px;
      height: 32px;
      text-align: center;
      justify-content: center;
      padding: 8px 0px;
      margin-bottom: 3px;
      font-size: 16px;

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${cores.pink} inset !important;
        /* -webkit-text-fill-color: green; */
      }

      &.error {
        border: 2px solid #4e2f76;
        background-color: #c0aed7;
      }
    }
  }

  small {
    color: #4e2f76;
  }
`

export const SuccessContainer = styled.div`
  color: ${cores.pink};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  p {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  ${InputGroup} {
    max-width: 155px;
    width: 100%;
  }

  @media (max-width: 500px) {
    flex-direction: column;

    ${InputGroup} {
      width: 100%;
      max-width: none;
    }
  }
`

export const DeliveryContainer = styled.div`
  color: ${cores.pink};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  h3 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  .last {
    margin-bottom: 24px;
  }
  .lastCard {
    margin-bottom: 16px;
  }

  .bigRow {
    ${InputGroup}:first-child {
      max-width: 228px;
    }
    ${InputGroup}:last-child {
      max-width: 87px;
    }

    @media (max-width: 500px) {
      ${InputGroup}:first-child {
        max-width: none;
      }

      ${InputGroup}:last-child {
        max-width: 115px;
      }
    }
  }

  @media (max-width: 500px) {
    .lastCard {
      flex-direction: row;

      ${InputGroup} {
        max-width: 115px;
      }
    }
  }
`
