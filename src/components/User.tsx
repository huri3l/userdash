import { memo } from 'react';
import { User as UserComponentProps } from '../types/user';

function UserComponent({ id, name, email, birthdate, address }: UserComponentProps) {
  return (
    <li>
      Id: {id} | Nome: {name} | E-mail: {email} | Data de nascimento: {birthdate} | Endereço:{' '}
      {address}
    </li>
  );
}

export const User = memo(UserComponent);
