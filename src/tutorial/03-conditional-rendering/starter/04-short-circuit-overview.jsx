import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [text, setText] = useState('') //falsy
  const [name, setName] = useState('sahithya') //truthy
  return (
    <div>
      <h2>short circuit - overview</h2>
      <h4>Falsy OR: {text || 'karthik - second'}</h4>
      <h4>Falsy AND:{text && 'karthik - second'}</h4>
      <h4>TRUTHY OR: {name || 'karthik - second'}</h4>
      <h4>TRUTHY AND:{name && 'karthik - second'}</h4>
    </div>
  )
}
export default ShortCircuitOverview
