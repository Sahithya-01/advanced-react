import { useState, useEffect } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="btn">
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}
//if you have some component which mounts and unmounts , even though its dependency array is empty its going to render each time when mounted
const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {}

    window.addEventListener('scroll', someFunc)

    //cleanup function for above
    return () => window.removeEventListener('scroll', someFunc)

    // console.log('hmmm, this is interesting... ')
    // const intId = setInterval(() => {
    //   //we can also take event listener as an example //subscribing
    //   console.log('hello from interval')
    // }, 1000)
    // return () => {
    //   clearInterval(intId) //unsubscribe, when the component unmounts that's when we cleanup
    // }
  }, [])
  return <h1>Hello there</h1>
}

export default CleanupFunction
