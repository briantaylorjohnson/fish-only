import React, { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import "./Tmodal.css"
import API from "../../utils/API";

function Tmodal(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveTackle = (user) =>
    {
        
        let tackle = 
        {
            "name": document.getElementById("tackle-name").value,
            "description": document.getElementById("tackle-description").value,
            "notes": document.getElementById("tackle-notes").value,
            "quantity": document.getElementById("tackle-quantity").value,
            "username":  props.profile.email
        }

        API.saveTackle(tackle).then((res) =>
        {
            console.log(res);
            window.location.replace("/tackle");
            handleClose();
        });
    }

    return (
      <>
        <Button className="btn btn-outline-success btn-sm mr-1 report-btn-color" variant="primary" onClick={handleShow}>
          New
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Tackle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={saveTackle} className="was-validated" novalidate>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Name:</label></small>
                        <input type="text" className="form-control" id="tackle-name" name="tackle-name" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Description:</label></small>
                        <textarea className="form-control" id="tackle-description" rows="2" name="tackle-description" required></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Quantity:</label></small>
                        <input type="text" className="form-control" id="tackle-quantity" name="tackle-quantity" required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <small><label>Notes:</label></small>
                        <textarea className="form-control" id="tackle-notes" rows="2" name="tackle-notes" ></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success btn-sm report-btn-color">Save Tackle</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="report-btn-color-close btn-sm" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Tmodal;