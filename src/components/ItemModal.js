import React from 'react'
import Modal from 'react-modal'

const ItemModal = (props) => {

  return (
    <Modal
      isOpen={!!props.selectedItem} // undefined will become false using double boolean (!!)
      contentLabel='SelectedItem'
      onRequestClose={props.closeModal}
    >
      <h3>Modal Here Hello</h3>
      {props.selectedItem && <p>{props.selectedItem}</p>}
      <button onClick={props.closeModal}>Close</button>
    </Modal>
  )
}

Modal.setAppElement('#app') // set to element with id 'app' from index.html file

export default ItemModal
