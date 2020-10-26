import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form , Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
<div>
<h1 className="title">Sign Up </h1>
</div>
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="title">Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name here!" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="title">Family Name</Form.Label>
    <Form.Control type="email" placeholder="Enter your family name here!" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="title">Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="title">What degree do you have?</Form.Label>
    <Form.Control as="select">
      <option>Bachelor</option>
      <option>License</option>
      <option>Master</option>
      <option>Doctor</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label className="title">What's your field of study?</Form.Label>
    <Form.Control as="select" multiple>
      <option>Mathemtaics</option>
      <option>Computer Science</option>
      <option>Physics</option>
      <option>Arts</option>
      <option>Literture</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="title">Brief description about you !</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
<Form.Group>
    <Form.File className="image" id="exampleFormControlFile1" label="Upload your image!" />
  </Form.Group>
  <Button className="button" variant="secondary">Submit</Button>{' '}
    </div>
  );
}

export default App;
