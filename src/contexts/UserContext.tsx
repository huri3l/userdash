import { createContext, ReactNode, useState } from 'react';
import { UserModal } from '../components/UserModal';
import { User, UserFormData } from '../types/user';
import { api } from '../services/fakeapi';
import { toast } from 'react-toastify';
import { useApi } from '../hooks/useApi';

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isOpenModal: boolean;
  setIsOpenModal: (newState: boolean) => void;
  selectedUser: number;
  setSelectedUser: (newState: number) => void;
  users: User[];
  setUsers: (newState: User[]) => void;
  setUserFormDefaultValues: (newState: UserFormData) => void;
  filter: string;
  setFilter: (newState: string) => void;
  createUser: (data: UserFormData) => void;
  updateUser: (data: UserFormData) => void;
  deleteUser: () => void;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(-1);
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');
  const [userFormDefaultValues, setUserFormDefaultValues] = useState<UserFormData>({});

  const { mutate } = useApi('users');

  const createUser = async (data: UserFormData) => {
    const user = {
      id: Math.floor(Math.random()),
      name: data.name,
      email: data.email,
      phone: data.phone,
      image: data.avatar,
      address: {
        country: data.country,
        state: data.state,
        street: data.street,
        number: data.number,
      },
    };

    await api.post('/users', user);
    mutate();

    toast.success('Usuário criado com sucesso!');
    setIsOpenModal(false);
  };

  const updateUser = async (data: UserFormData) => {
    const user = {
      id: selectedUser,
      name: data.name,
      email: data.email,
      phone: data.phone,
      image: data.avatar,
      address: {
        country: data.country,
        state: data.state,
        street: data.street,
        number: data.number,
      },
    };

    await api.put(`/users/${selectedUser}`, user);
    mutate();

    toast.success('Usuário atualizado com sucesso!');
    setIsOpenModal(false);
  };

  const deleteUser = async () => {
    await api.delete(`/users/${selectedUser}`);
    mutate();
    toast.success('Usuário deletado com sucesso!');
  };

  return (
    <UserContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        selectedUser,
        setSelectedUser,
        users,
        setUsers,
        createUser,
        updateUser,
        deleteUser,
        setUserFormDefaultValues,
        filter,
        setFilter,
      }}
    >
      {children}
      {isOpenModal && <UserModal initialValues={userFormDefaultValues} />}
    </UserContext.Provider>
  );
};
