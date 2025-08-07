import { BrowserRouter, useRoutes } from 'react-router-dom'

import Alquileres from '../Alquileres'
import Autos from '../Autos'
import Clientes from '../Clientes'
import Home from '../Home'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'

import '../App/App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/alquileres', element: <Alquileres />},
    {path: '/autos', element: <Autos />},
    {path: '/clientes', element: <Clientes />},
    {path: '/', element: <Home />},
    {path: '/*', element: <NotFound />},
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>    
  )
}

export default App
