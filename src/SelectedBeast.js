import React from 'react';
import { Modal } from 'react-bootstrap';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {

  render() {

    return (
      <>
        <Modal id='Modal' show={this.props.showModal} onHide={this.props.closeModal}>

          <Modal.Title id='title'>{this.props.titleslct}</Modal.Title>

          <Modal.Body id="body" ><img src={this.props.imgslct} alt={this.props.titleslct}></img></Modal.Body>

          <Modal.Footer id="footer">{this.props.desc}</Modal.Footer>



        </Modal>
      </>
    )

  }
}

export default SelectedBeast;