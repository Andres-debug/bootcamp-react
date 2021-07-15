import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ user }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png'
        className='card-img-top'
        alt={user.name}
      />
      <div className='card-body'>
        <h5 className='card-title'>{user.name}</h5>
        <p className='card-text'>
          {`${user.company.catchPhrase}`}
        </p>
        <Link to={`users/${user.username}`}>More info</Link>
      </div>
    </div>
  );
};
