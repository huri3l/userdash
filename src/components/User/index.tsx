import { memo } from 'react';
import { User as UserType } from '../../types/user';

import './styles.scss';

interface UserProps extends Omit<UserType, 'birthdate'> {
  selectedUser: number;
  setSelectedUser: (id: number) => void;
}

function UserComponent({
  id,
  selectedUser,
  setSelectedUser,
  name,
  email,
  image,
  phone,
  address,
}: UserProps) {
  return (
    <li className={selectedUser === id ? 'isActive' : ''} onClick={() => setSelectedUser(id)}>
      <section className="info">
        <img src={image} alt={`${name} avatar`} />
        <div>
          <h2>{name}</h2>
          <span>{email}</span>
          <span>{phone}</span>
        </div>
      </section>
      <aside className="address">
        <div>
          <span>COUNTRY</span>
          {address.country}
        </div>
        <div>
          <span>STATE</span>
          {address.state}
        </div>
        <div>
          <span>STREET</span>
          {address.street}, {address.number}
        </div>
      </aside>
    </li>
  );
}

export const User = memo(UserComponent);
