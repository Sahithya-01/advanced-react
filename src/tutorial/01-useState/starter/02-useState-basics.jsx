import { useState } from 'react'
const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  //useState preserves the value of count between renders
  return (
    <div>
      <h1>count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
    </div>
  )
}

export default UseStateBasics
