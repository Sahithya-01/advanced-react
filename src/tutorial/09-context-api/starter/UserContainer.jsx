import React from 'react'
import { useAppContext } from './Navbar'

const UserContainer = () => {
  const value = useAppContext()
  console.log(value)
  const { user, logout } = value
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there,{user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}

export default UserContainer
