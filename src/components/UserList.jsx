import axios from 'axios';
import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h1>ユーザ一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}_{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
