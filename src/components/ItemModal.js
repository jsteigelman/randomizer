import React from 'react'
import Modal from 'react-modal'

const ItemModal = (props) => {

  const modalTitle = "The decision has been made! Randomizer chose:"

  return (
    <Modal
      isOpen={!!props.selectedItem} // undefined will become false using double boolean (!!)
      contentLabel='SelectedItem'
      onRequestClose={props.closeModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">{modalTitle}</h3>
      {props.selectedItem && <p className="modal__body">{props.selectedItem}</p>}
      <button className="medium-button" onClick={props.closeModal}>Close</button>
    </Modal>
  )
}

Modal.setAppElement('#app') // set to element with id 'app' from index.html file

export default ItemModal
