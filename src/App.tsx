// import React from 'react'
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter
  // Routes,                            esse metodo é utilizado com o BrowserRouter mas esta importado no arquivo routes
  // Route
} from 'react-router-dom'
// import Header from './components/Header'
import { GlobalCss } from './styles'
// import Home from './pages/Home'
// import Categories from './pages/Categories'                   esta importado no arquivo routes

import Rotas from './routes'
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FC } from 'react'
// import Cart from './components/Cart'

// const rotas = createBrowserRouter([               esse metodo é utilizaDO usando o router provider, porem o header esta antes dele
//   {                                               entao para resolver esse problema utilizamos o Browser router no fragmento e a escrita
//     path: '/',                                    deixa de ser como json e passa a ser como uma função igual esta feita abaixo
//     element: <Home />                             os dois metodos tem o mesmo resultado
//   },
//   {
//     path: '/categories',
//     element: <Categories />
//   }
// ])

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop position={0} />
        {/* antes aqui era apenas um fragmento*/}
        <GlobalCss />
        {/* <div className="container">
        <Header />
      </div> */}
        {/* <RouterProvider router={Rotas} />            esse metodo é utilizado com o json, igual esta comentado no arquivo routes*/}
        <Rotas />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
