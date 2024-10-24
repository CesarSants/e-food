import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import InternoRestaurante from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/InternoRestaurante/:id" element={<InternoRestaurante />} />
  </Routes>
)

export default Rotas
