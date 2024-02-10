import React from 'react'

interface User {
  id:number;
  name:string;
  email:string;
}
const UserPage = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache: 'no-store'});
  const users: User[] = await res.json();
  return (
<div>
  <h1>Users</h1>
{/* if server side static rendering is datetime no change, if dynamic rendering is datetime will update every second(request every time), {cache: 'no-store'} */}
  <table className='table table-bordered'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    {users.map(user=><tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>)}
    </tbody>
  </table>
</div>
  )
}

export default UserPage