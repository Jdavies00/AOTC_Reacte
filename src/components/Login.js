import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';



function Login({ setUserEmail, userEmail, setUserPassword, userPassword, Bearer, setBearertoken }) {
  function handleSubmit(event) {
    event.preventDefault();
    // const method = 'post'

    const headers = {
      Accept: "Application/Json",
      'Content-Type': 'application/json;charset=UTF-8',
    }
    axios({
      url: "http://localhost:8000/v1/oauth/token",
      method: "post",
      data: {
        "grant_type": "password",
        "client_id": 2,
        "client_secret": "noNvb6l7hFRwskDt4OCe0UgOKgeoxsvvQqSDj5pT",
        "password": userPassword,
        "username": userEmail,
        "scope": ""
      },
      headers,
      
    })
      .then(res => setBearertoken (prevbearer=>prevbearer=res.data.access_token))
      .catch(err => console.log('error: ', err))
      console.log(Bearer)
  }
  return (
    <Form class='Login' onSubmit={e => handleSubmit(e)}>
      <FormGroup>
        <Label for="exampleEmail"></Label>
        <Input type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
          onChange={e => setUserEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword"></Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
          onChange={e => setUserPassword(e.target.value)}
        />
      </FormGroup>
      <Button type='submit'>Login</Button>
    </Form>

  );
}
export default Login;










//  <Input onSubmit={e => handleSubmit(e)}>
// <InputGroup>
//   <Input
//     type="email"
//     name="email"
//     id="exampleEmail"
//     placeholder="with a placeholder"
//     onChange={e => setUserEmail(e.target.value)}
//   />
//   <InputGroupAddon addonType="append">
//     <Button type='submit' color="secondary">To the Right!</Button>
//   </InputGroupAddon>
// </InputGroup>
// </Input> 