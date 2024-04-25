import { useState } from 'react'
const frameworks = ['react', 'angular', 'vue', 'svelte']
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState('react')
  const handleShipping = (e) => {
    console.log(event.target.checked)
    setShipping(e.target.checked)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(framework, shipping)
  }
  const handleFramework = (e) => {
    setFramework(e.target.value)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            id="shipping"
            name="shipping"
            checked={shipping} // similar to value={}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
        </div>
        <select
          name="framework"
          id="framework"
          value={framework}
          onChange={handleFramework}
        >
          {frameworks.map((framework) => {
            return <option key={framework}>{framework}</option>
          })}
        </select>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
