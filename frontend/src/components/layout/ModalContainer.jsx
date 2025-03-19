import { useContext } from 'react'

import ModalContext from '../../context/modal/ModalContext'

function ModalContainer () {
  const { modal } = useContext(ModalContext)
  return modal !== null &&
    <aside id="modal-container">
      <div className="modal-wrapper">
        ModalContainer - ModalWrapper
      </div>
    </aside>
}

export default ModalContainer