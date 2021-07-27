import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeasts extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.modalShow} onHide={this.props.hiding}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.titleData}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.props.descriptionData}</p>
            <img src={this.props.imageData} style={{ width: "400px" }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.hiding}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeasts;
