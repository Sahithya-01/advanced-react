import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/kavikar'

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const user_data = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const user = await response.json()
        console.log(user)
        setUser(user)
      } catch (error) {
        setIsError(true) //since fetch doesn't treat 404 as an error, we are manually setting isError to true
        console.log(error)
      }
      setIsLoading(false)
    }
    user_data()
  }, [])
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  const { avatar_url, name, company, bio } = user // destructure here
  return (
    <div>
      <img
        src={avatar_url}
        style={{ width: '150px', borderRadius: '25px' }}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
