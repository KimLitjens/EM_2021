import React, { useState, } from 'react';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Login() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailAddress, password)
            history.push("/")
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }
    return (
        <div>
            <HeaderContainer />
            <Form className="">
                <Form.Title>Log In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleLogin} method="POST">
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
                    <Form.Submit disabled={loading} type="submit">
                        Log In
                        </Form.Submit>
                    <Form.Text>
                        Need an account? <Form.Link to="/signup">Sign Up</Form.Link>
                    </Form.Text>
                </Form.Base>
            </Form>
        </div>
    )
}