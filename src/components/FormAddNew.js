import React from 'react'
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap/lib';

class FormAddNew extends React.Component {
    render() {
      return (
        <>
          <Modal show={true} onHide={() => this.props.hideAddForm()}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Folder</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <InputGroup className="mb-3">
                <FormControl inputRef={ref => { this.myInput = ref; }} placeholder="Folder Name" aria-label="Folder Name"/>
            </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => {this.props.addFolder(this.myInput.value); this.props.hideAddForm()}}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  export default FormAddNew;