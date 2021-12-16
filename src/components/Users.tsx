import { memo } from 'react';
import { User as UserType } from '../types/user';
import { User } from './User';

type UsersProps = {
  users: UserType[];
};

function UsersComponent({ users }: UsersProps) {
  return (
    <ul>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          birthdate={user.birthdate}
          phone={user.phone}
          address={user.address}
        />
      ))}
    </ul>
  );
}

export const Users = memo(UsersComponent);
