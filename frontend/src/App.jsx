import { Outlet } from 'react-router-dom'

import HeaderContainer from './components/layout/HeaderContainer'
import FooterContainer from './components/layout/FooterContainer'
import MenuContainer from './components/layout/MenuContainer'
import ModalContainer from './components/layout/ModalContainer'
import AlertZeta from './components/layout/AlertZeta'

function App () {
  return (
    <div className="App">
      <h1>livingtheOKlife</h1>
      <HeaderContainer />
      <ModalContainer />
      <MenuContainer />
      <Outlet />
      <FooterContainer />
      <AlertZeta />
    </div>
  )
}

export default App
