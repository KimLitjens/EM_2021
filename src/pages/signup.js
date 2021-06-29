import React, { useState, } from 'react';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';

export default function Signup() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('');

    return (
        <div>
            <HeaderContainer />
            <Form className="">
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base method="POST">
                    <Form.Label for="emailAdress">Email Address</Form.Label>
                    <Form.Input
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Label for="password">Password</Form.Label>
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <Form.Label for="passwordConfirm">Password Confirmation</Form.Label>
                    <Form.Input
                        type="passwordConfirm"
                        value={passwordConfirm}
                        autoComplete="off"
                        onChange={({ target }) => setPasswordConfirm(target.value)}
                    />
                    <Form.Submit type="submit">
                        Sign Up
                        </Form.Submit>
                    <Form.Text>
                        Already a user? Log in
                    </Form.Text>
                </Form.Base>
            </Form>
        </div>
    )
}