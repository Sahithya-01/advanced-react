import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    // fetch(url)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(response.statusText)
    //     }
    //     return response.json()
    //   })
    //   .then((data) => {
    //     setUsers(data)
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }),
    []

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          return (
            <li key={user.id}>
              {/* const {id,login,avatar_url,html_url} */}
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h5>{user.login}</h5>
                <a href={user.html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
