import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Sahithya',
    age: 24,
    hobby: 'listening to music',
  })

  const displayPerson = () => {
    setPerson({ ...person, name: 'sony' })
  }
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Hobby: {person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Change person
      </button>
    </div>
  )
}

export default UseStateObject
