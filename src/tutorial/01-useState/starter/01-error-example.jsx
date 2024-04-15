const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log(count)
  }
  return (
    <div>
      <h1>value : {count}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default ErrorExample
