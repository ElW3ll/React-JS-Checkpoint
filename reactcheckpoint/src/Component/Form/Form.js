import React from "react"
import {Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const MyForm = () => {
return (
    <div>

<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Why Waywa?</Form.Label>
    <Form.Control as="select">
      <option>Change</option>
      <option>New adventure</option>
      <option>Loosing weight</option>
      <option>Have Fun</option>
      <option>Awaken</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Are you</Form.Label>
    <Form.Control as="select" multiple>
      <option>Athlete</option>
      <option>Lazy</option>
      <option>Casual runner</option>
      <option>Gym addict</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Anything else we need to know?</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
    </div>  
)
}


export default MyForm;
