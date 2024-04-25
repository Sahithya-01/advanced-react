import { useState } from 'react'
const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const nameHandleChange = (event) => {
    setName(event.target.value)
  }
  const emailHandleChange = (event) => {
    setEmail(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={name}
          onChange={nameHandleChange} //onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          id="email"
          value={email}
          onChange={emailHandleChange} //onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  )
}
export default ControlledInputs
