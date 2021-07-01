import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Logout } from '../components'
import { useAuth } from '../context/AuthContext'

export function LogoutContainer() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.pushState('./login')
        } catch {
            setError('Failed to log out')
        }

    }

    return (
        <Logout>
            {error && <Logout.Error>{error}</Logout.Error>}
            <strong>email:</strong> {currentUser.email}
            <Logout.Button onClick={handleLogout} >Log Out</Logout.Button>
        </Logout>
    )
}
