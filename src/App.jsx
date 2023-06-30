import React from 'react'
import User from './User'
import './App.css'

function App() {
  const [users, setUsers] = React.useState(null)

  React.useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  },[])

  let usersJsx

  if (users) {
    usersJsx = users.map(user => <User key={user.id} user={user} />)
  }

  return (
    <div>
     {
      users ? usersJsx : "Loading..."
     }
    </div>
  )
}

export default App
