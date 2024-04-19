import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const login = () => {
    setUser({
      //normally we do connect to db or an API
      name: 'Sahithya',
    })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <div>
      {user ? (
        <div>
          <h3>Hello {user.name}</h3>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <button className="btn" onClick={login}>
          login
        </button>
      )}
    </div>
  )
}

export default UserChallenge
