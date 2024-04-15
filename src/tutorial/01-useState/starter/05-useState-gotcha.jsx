import { useState } from 'react'
const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setTimeout(() => {
      setValue((currentState) => {
        const newState = currentState + 1
        return newState
      })
      console.log('clicked the button')
    }, 3000)
  }
  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
