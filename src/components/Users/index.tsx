import { memo, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useApi } from '../../hooks/useApi';
import { User } from '../User';

import './styles.scss';

function UsersComponent() {
  const { users, setUsers, filter } = useContext(UserContext);

  const { data } = useApi(filter ? `users?q=${filter}` : 'users');

  setUsers(data);

  if (!users) {
    return <h1>Carregando...</h1>;
  }

  return (
    <ul>
      {users?.map((user) => (
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
