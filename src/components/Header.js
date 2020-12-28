import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Header() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/users').then((res) => {
      setUsers(res.data.users);
    });

    return () => {};
  }, []);

  const usersList = users.map((user) => (
    <div>
      <p key={user.id}>{user.name}</p>
      <img src={user.avatar}></img>
    </div>
  ));

  console.log(users);

  return (
    <header>
      <p>I am the header</p>
      <div>{usersList}</div>
    </header>
  );
}
