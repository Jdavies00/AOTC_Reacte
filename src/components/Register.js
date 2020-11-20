import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


function Register({ setUserEmail, userEmail, setUserName, setUserPassword, userName, userPassword }) {
    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/register'
        const method = 'post'
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
        const body = { name: userName, email: userEmail, password: userPassword }
        const data = { name: userName, email: userEmail, password: userPassword }

        axios({
            url,
            method,
            headers,
            body,
            data,
        })
            .then(res => console.log(res))
            .catch(err => console.log('error: ', err))
    }
    return (
        <div>
            <Form class='Form' onSubmit={e => handleSubmit(e)}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    {/* {userEmail} */}

                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password"
                        onChange={e => setUserPassword(e.target.value)}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="name"
                        name="name"
                        id="UserName"
                        placeholder="with a placeholder"
                        onChange={e => setUserName(e.target.value)}

                    />
                </FormGroup>
                <Button type='submit'>register</Button>
            </Form>

        </div>
    )
}

export default Register
