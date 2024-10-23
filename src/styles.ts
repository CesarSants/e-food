import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: 'rgb(7, 8, 12)',
  cinzaClaro: '#a3a3a3',
  cinza: '#333333',
  verde: '#10ac84',
  pinkChoque: '#e66767',
  pink: '#FFEBD9',
  pinkback: '#fff8f2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${cores.preta};
    color: ${cores.branca};

/*
    ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.10);
    z-index: -2;
  } */
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

// export const Container = styled.div`
//   max-width: 1024px;
//   width: 100%;
//   margin: 0 auto;
// `
