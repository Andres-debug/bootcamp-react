import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../Card/Card';

export const Lista = () => {
  const data = useSelector((state) => state.users.data);
  const { loading, users } = data;
  return (
    <div>
      {loading && <h1>Cargando...</h1>}
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {!loading &&
          users.map((user) => {
            return (
              <Card user={user} key={user.phone}></Card>
            );
          })}
      </ul>
    </div>
  );
};
