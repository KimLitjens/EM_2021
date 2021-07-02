import React, { useState, } from 'react';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'


export default function Signup() {

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()
    const history = useHistory()

    async function handleSignup(e) {
        e.preventDefault()

        if (password !== passwordConfirm) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailAddress, password)
            history.push("/")
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    return (
        <div>
            <HeaderContainer />
            <Form className="">
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Label for="username">User Name</Form.Label>
                    <Form.Input
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <Form.Label for="fullName">Full Name</Form.Label>
                    <Form.Input
                        value={fullName}
                        onChange={({ target }) => setFullName(target.value)}
                    />
                    <Form.Label for="emailAddress">Email Address</Form.Label>
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
                        type="password"
                        value={passwordConfirm}
                        autoComplete="off"
                        onChange={({ target }) => setPasswordConfirm(target.value)}
                    />
                    <Form.Submit disabled={loading} type="submit">
                        Sign Up
                        </Form.Submit>
                    <Form.Text>
                        Already a user? <Form.Link to="/login">Log in</Form.Link>
                    </Form.Text>
                </Form.Base>
            </Form>
        </div>
    )
}