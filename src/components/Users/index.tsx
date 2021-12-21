import { memo, useState } from 'react';
import { User as UserType } from '../../types/user';
import { User } from '../User';

import './styles.scss';

type UsersProps = {
  users: UserType[];
};

function UsersComponent({ users }: UsersProps) {
  const [selectedUser, setSelectedUser] = useState<number>(-1);

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
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      ))}
    </ul>
  );
}

export const Users = memo(UsersComponent);
