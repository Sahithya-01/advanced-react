import { useState } from 'react'
import { data } from '../../../data'
const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    const fakeId = Date.now()
    users.push({ id: fakeId, name: name }) //const newUser={ id: fakeId, name} const updatedUsers=[...users,newUser]
    setUsers(users)
    setName('') // it should be there otherwise the new user won't be rendered, In the provided code, the setName('') line inside the handleSubmit function is responsible for clearing the input field after the form submission. Without clearing the input field, the input element would retain its previous value, and users wouldn't see any change in the UI even after submitting the form multiple times.
    console.log(users)
  }
  const handleOnClick = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id)
    setUsers(updatedUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h5>{user.name}</h5>
            <button
              className="btn btn-danger"
              style={{ marginBottom: '1.5rem' }}
              onClick={() => handleOnClick(user.id)}
            >
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
