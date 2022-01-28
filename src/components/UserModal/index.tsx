import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.scss';
import { IoClose, IoCheckmark } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { UserFormData } from '../../types/user';

interface UserModalProps {
  initialValues: UserFormData;
}

export function UserModal({ initialValues }: UserModalProps) {
  const { setIsOpenModal, selectedUser, updateUser, createUser, setUserFormDefaultValues } =
    useContext(UserContext);

  useEffect(() => {
    setUserFormDefaultValues({});
  }, []);

  function handleClose() {
    setIsOpenModal(false);
  }

  function onSubmit(data: UserFormData) {
    if (selectedUser !== -1) {
      updateUser(data);
    } else {
      createUser(data);
    }

    window.location.reload();
  }

  const { register, handleSubmit } = useForm({ defaultValues: initialValues });

  return (
    <div className="overlay">
      <div className="container">
        <div>
          <strong>Criar usuário</strong>
          <button type="button" onClick={handleClose}>
            <IoClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <main>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" {...register('name')} />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" {...register('email')} />
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <input type="text" id="phone" {...register('phone')} />
            </div>
            <div>
              <label htmlFor="country">País</label>
              <input type="text" id="country" {...register('country')} />
            </div>
            <div>
              <label htmlFor="state">Estado</label>
              <input type="text" id="state" {...register('state')} />
            </div>
            <div>
              <label htmlFor="street">Rua</label>
              <input type="text" id="street" {...register('street')} />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input type="text" id="number" {...register('number')} />
            </div>
            <div>
              <label htmlFor="avatar">Foto de perfil (link)</label>
              <input type="text" id="avatar" {...register('avatar')} />
            </div>
          </main>
          <footer>
            <button type="submit">
              <IoCheckmark />
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
