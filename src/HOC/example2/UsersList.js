import React, { useEffect, useState } from 'react'

const UsersList = () => {

    const [users, setUsers] = useState([]);
    console.log("users", users)

    useEffect(() => {
        const fetchUsers = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const jsonData = await res.json();
            setUsers(jsonData);
        }
        fetchUsers();
    }, [])

  return (
    <div>UsersList</div>
  )
}

export default UsersList