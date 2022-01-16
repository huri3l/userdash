import { memo, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { User } from '../User';

import './styles.scss';

function UsersComponent() {
  const { users } = useContext(UserContext);

  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          image={user.image}
          phone={user.phone}
          address={user.address}
        />
      ))}
    </ul>
  );
}

export const Users = memo(UsersComponent);
