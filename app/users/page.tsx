import React from 'react'

interface User {
  id:number;
  name:string
}
const UserPage = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache: 'no-store'});
  const users: User[] = await res.json();
  return (
<div>
  <h1>Users</h1>
  {/* if server side static rendering is datetime no change, if dynamic rendering is datetime will update every second(request every time), {cache: 'no-store'} */}
    <p>{new Date().toLocaleTimeString()}</p>
  <ul>
    {users.map(user=><li key={user.id}>{user.name}</li>)}
  </ul>
</div>
  )
}

export default UserPage