import { createContext, ReactNode, useState } from 'react';
import { UserModal } from '../components/UserModal';
import { User, UserFormData } from '../types/user';
import { api } from '../services/fakeapi';
import { toast } from 'react-toastify';

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
  filterUsers: (filter: string) => void;
  createUser: (data: UserFormData) => void;
  updateUser: (data: UserFormData) => void;
  deleteUser: () => void;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(-1);
  const [users, setUsers] = useState<User[]>([]);
  const [userFormDefaultValues, setUserFormDefaultValues] = useState<UserFormData>({});

  const filterUsers = async (filter: string) => {
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const data = await response.json();

    setUsers(data);
  };

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
    toast.success('Usuário criado com sucesso!');
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
    toast.success('Usuário atualizado com sucesso!');
  };

  const deleteUser = async () => {
    await api.delete(`/users/${selectedUser}`);
    toast.success('Usuário deletado com sucesso!');

    // window.location.reload();
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
        filterUsers,
        createUser,
        updateUser,
        deleteUser,
        setUserFormDefaultValues,
      }}
    >
      {children}
      {isOpenModal && <UserModal initialValues={userFormDefaultValues} />}
    </UserContext.Provider>
  );
};
