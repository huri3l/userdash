import { memo, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { User as UserType } from '../../types/user';

import './styles.scss';

function UserComponent({ id, name, email, image, phone, address }: Omit<UserType, 'birthdate'>) {
  const {
    selectedUser,
    setSelectedUser,
    deleteUser,
    setFormName,
    setFormEmail,
    setFormPhone,
    setFormCountry,
    setFormState,
    setFormStreet,
    setFormNumber,
    setFormAvatar,
    setIsOpenModal,
  } = useContext(UserContext);

  function updateUserModal() {
    setFormName(name);
    setFormEmail(email);
    setFormPhone(phone);
    setFormCountry(address.country);
    setFormState(address.state);
    setFormStreet(address.street);
    setFormNumber(`${address.number}`);
    setFormAvatar(image);

    setIsOpenModal(true);
  }

  return (
    <li className={selectedUser === id ? 'isActive' : ''} onClick={() => setSelectedUser(id)}>
      <section className="info">
        <img src={image} alt={`${name} avatar`} />
        <div>
          <h2>{name}</h2>
          <span>{email}</span>
          <span>{phone}</span>
        </div>
        {selectedUser === id && (
          <div className="buttons">
            <button onClick={updateUserModal}>Editar</button>
            <button onClick={deleteUser}>Excluir</button>
          </div>
        )}
      </section>
      <aside className="address">
        <div>
          <span>PAÍS</span>
          {address.country}
        </div>
        <div>
          <span>ESTADO</span>
          {address.state}
        </div>
        <div>
          <span>ENDEREÇO</span>
          {address.street}, {address.number}
        </div>
      </aside>
    </li>
  );
}

export const User = memo(UserComponent);
