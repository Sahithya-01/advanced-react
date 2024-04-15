import { data } from '../../../data'
import { useState } from 'react'
const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
    //setPeople(people.filter((person) => person.id !== id))
  }
  const clearAllItems = (id) => {
    setPeople([])
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={clearAllItems} // onClick={()=> setPeople([])}
      >
        clear all
      </button>
    </div>
  )
}

export default UseStateArray
