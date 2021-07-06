import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import FirestoreContext from '../context/FirestoreContext'
import * as ROUTES from '../constants/routes'
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { useAuth } from '../context/AuthContext'
import { doesUsernameExist } from '../services/firebase'


export default function Signup() {
    const { firestore } = useContext(FirestoreContext)
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [fullName, setFullName] = useState('')
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()

    async function handleSignup(e) {
        e.preventDefault()
        const usernameExists = await doesUsernameExist(username)
        if (!usernameExists.legth) {
            try {
                setError('')
                setLoading(true)
                const createdUserResult = await signup(emailAddress, password)

                await createdUserResult.user.updateProfile({
                    displayName: username
                })

                await firestore.collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    dateCreated: Date.now()
                })
                history.push(ROUTES.DASHBOARD)
            } catch (error) {
                setFullName('')
                setEmailAddress('')
                setPassword('')
                setPasswordConfirm('')
                setError(error.message)
            }
        } else {
            setFullName('')
            setEmailAddress('')
            setPassword('')
            setPasswordConfirm('')
            setError('That username is already taken, please try oanother!')
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