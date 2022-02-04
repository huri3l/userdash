import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.scss';
import { IoClose, IoCheckmark } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { UserFormData } from '../../types/user';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { phoneNumber } from '../../utils/validations';
import { InputError } from '../InputError/index';

interface UserModalProps {
  initialValues: UserFormData;
}

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(phoneNumber),
  country: yup.string().required(),
  state: yup.string().required(),
  street: yup.string().required(),
  number: yup.number().required(),
  avatar: yup.string(),
});

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

  function onError(error: any) {}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="overlay">
      <div className="container">
        <div>
          <strong>Criar usuário</strong>
          <button type="button" onClick={handleClose}>
            <IoClose />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <main>
            <div>
              <label htmlFor="name">Nome *</label>
              <input type="text" id="name" {...register('name')} placeholder="Ex: Patrick" />
              {errors?.name?.type && <InputError type={errors.name.type} field="name" />}
            </div>
            <div>
              <label htmlFor="email">E-mail *</label>
              <input
                type="text"
                id="email"
                {...register('email')}
                placeholder="Ex: email@exemplo.com"
              />
              {errors?.email?.type && <InputError type={errors.email.type} field="email" />}
            </div>
            <div>
              <label htmlFor="phone">Celular</label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                placeholder="Ex: (99) 99999-9999"
              />
              {errors?.phone?.type && <InputError type={errors.phone.type} field="phone" />}
            </div>
            <div>
              <label htmlFor="country">País *</label>
              <input type="text" id="country" {...register('country')} placeholder="Ex: Brasil" />
              {errors?.country?.type && <InputError type={errors.country.type} field="country" />}
            </div>
            <div>
              <label htmlFor="state">Estado *</label>
              <input type="text" id="state" {...register('state')} placeholder="Ex: São Paulo" />
              {errors?.state?.type && <InputError type={errors.state.type} field="state" />}
            </div>
            <div>
              <label htmlFor="street">Rua *</label>
              <input
                type="text"
                id="street"
                {...register('street')}
                placeholder="Ex: Avenida 9 de Julho"
              />
              {errors?.street?.type && <InputError type={errors.street.type} field="street" />}
            </div>
            <div>
              <label htmlFor="number">Número *</label>
              <input type="text" id="number" {...register('number')} placeholder="Ex: 10" />
              {errors?.number?.type && <InputError type={errors.number.type} field="number" />}
            </div>
            <div>
              <label htmlFor="avatar">Foto de perfil (link)</label>
              <input
                type="text"
                id="avatar"
                {...register('avatar')}
                placeholder="Ex: https://avatars..."
              />
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
