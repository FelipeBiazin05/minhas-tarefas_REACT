import { Provider } from 'react-redux'
import store from './store'

import EstiloGlobal, { Container } from './styles'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Cadastro from './pages/cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
