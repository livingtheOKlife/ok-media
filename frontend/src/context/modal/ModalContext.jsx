import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react';

import modalReducer from './ModalReducer'

const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const initialState = null
  const [state, dispatch] = useReducer(modalReducer, initialState)
  const setModalActive = () => {
    dispatch({
      type: 'SET_MODAL_ACTIVE',
    })
  }
  const setModalInactive = () => {
    dispatch({
      type: 'SET_MODAL_INACTIVE',
    })
  }
  return (
    <ModalContext.Provider value={{
      modal: state,
      setModalActive,
      setModalInactive,
      dispatch
    }}>
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ModalContext