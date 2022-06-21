import {useEffect, useState} from 'react'

const Dropdown = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState('')
  const [showUser, setShowUser] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    setSelectedUser(value)
    if (value === 'select user') {
      setShowUser(false)
    } else {
      setShowUser(true)
    }
  }

  console.log(showUser, selectedUser)

  return (
    <div>
      <label>select user: </label>
      <select onChange={handleChange} value={selectedUser}>
        <option value='select user'>select user</option>
        {users.map((user) => {
          return <option key={user.id}>{user.name}</option>
        })}
      </select>
      <div>
        <h2>selected user is : {showUser ? selectedUser : ''}</h2>
      </div>
    </div>
  )
}

export default Dropdown
