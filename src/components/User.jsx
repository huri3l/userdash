import { memo } from 'react';

function UserComponent({ id, name, email }) {
  return (
    <li>
      Id: {id} | Nome: {name} | E-mail: {email}
    </li>
  );
}

export const User = memo(UserComponent, (previousProps, currentProps) => {
  return Object.is(previousProps.users, currentProps.users);
});
