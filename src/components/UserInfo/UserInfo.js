import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const UserInfo = () => {
  const { username } = useParams();

  const data = useSelector((state) => state.users.data);

  const { users, loading } = data;
  const user = users?.filter(
    (u) => u.username === username,
  )[0];

  return (
    <>
      {user && !loading ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px',
          }}
        >
          <h1>{user.name}</h1>

          <h3>User info:</h3>
          <ol className='list-group list-group-numbered'>
            <li className='list-group-item'>
              Email: <strong>{user.email}</strong>
            </li>
            <li className='list-group-item'>
              Website: <strong>{user.website}</strong>
            </li>
            <li className='list-group-item'>
              Phone: <strong>{user.phone}</strong>
            </li>
          </ol>
        </div>
      ) : (
        <h1>Cargando</h1>
      )}
    </>
  );
};
