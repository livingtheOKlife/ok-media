import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FaCircleUser, FaGlobe, FaMessage } from 'react-icons/fa6'

import MenuContext from '../../context/menu/MenuContext'
import ModalContext from '../../context/modal/ModalContext'

import MenuBtn from '../MenuBtn'

function HeaderContainer () {
  const { setMenuInactive } = useContext(MenuContext)
  const { setModalActive, setModalInactive } = useContext(ModalContext)
  const navigate = useNavigate()
  return (
    <header id="header-container">
      <nav id="main-nav">
        <Link to='/' onClick={() => {
          setMenuInactive()
          setModalInactive()
        }}>
          <span className="logo"><em>OK</em>media</span>
        </Link>
        <ul className="header-nav-list">
          <li className="header-nav-item" onClick={() => {
            navigate('/profile')
            setMenuInactive()
            setModalInactive()
          }}>
            <FaCircleUser />
          </li>
          <li className="header-nav-item" onClick={() => {
            navigate('/explore')
            setMenuInactive()
            setModalInactive()
          }}>
            <FaGlobe />
          </li>
          <li className="header-nav-item" onClick={() => {
            setModalActive()
            setMenuInactive()
          }}>
            <FaMessage />
          </li>
          <MenuBtn />
        </ul>
      </nav>
    </header>
  )
}

export default HeaderContainer