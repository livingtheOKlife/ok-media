import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { FaArrowRightFromBracket, FaArrowRightToBracket, FaArrowUpFromBracket, FaBookOpenReader, FaGear, FaSignature, FaUserGear, FaX } from 'react-icons/fa6'

import MenuContext from '../../context/menu/MenuContext' 
import ModalContext from '../../context/modal/ModalContext'

const MenuContainer = () => {
  const { menu, setMenuInactive } = useContext(MenuContext)
  const { setModalInactive } = useContext(ModalContext)
  const navigate = useNavigate()
  const location = useLocation()
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }
  const logoutHandler = () => {}
  return menu !== null &&
    <aside id='menu-container'>
      <nav id="menu-nav">
        <ul className="menu-nav-list">
          {
            !pathMatchRoute('/login') &&
              <li className="menu-nav-item" onClick={() => {
                navigate('/login')
                setModalInactive()
                setMenuInactive()
              }}>
                Login
                <FaArrowRightToBracket />
              </li>
          }
          {
            !pathMatchRoute('/account') &&
              <li className="menu-nav-item" onClick={() => {
                navigate('/account')
                setModalInactive()
                setMenuInactive()
              }}>
                Account
                <FaUserGear />
              </li>
          }
          {
            !pathMatchRoute('/settings') &&
              <li className="menu-nav-item" onClick={() => {
                navigate('/settings')
                setModalInactive()
                setMenuInactive()
              }}>
                Settings
                <FaGear />
              </li>
          }
          {
            !pathMatchRoute('/about') &&
              <li className="menu-nav-item" onClick={() => {
                navigate('/about')
                setModalInactive()
                setMenuInactive()
              }}>
                About
                <FaBookOpenReader />
              </li>
          }
          <li className="menu-nav-item" onClick={() => {
            logoutHandler()
            setModalInactive()
            setMenuInactive()
          }}>
            Logout
            <FaArrowRightFromBracket />
          </li>
        </ul>
        <button type="button" onClick={setMenuInactive}>
          Close
          <FaX />
        </button>
      </nav>
    </aside>
}

export default MenuContainer