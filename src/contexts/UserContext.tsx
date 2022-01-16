import { createContext, ReactNode, useState } from 'react';
import { UserModal } from '../components/UserModal';
import { User } from '../types/user';

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
  filterUsers: (filter: string) => void;
};

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  selectedUser: -1,
  setSelectedUser: () => {},
  users: [],
  setUsers: () => {},
  filterUsers: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal);
  const [selectedUser, setSelectedUser] = useState(initialValue.selectedUser);
  const [users, setUsers] = useState<User[]>([]);

  const filterUsers = async (filter: string) => {
    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const data = await response.json();

    setUsers(data);
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
      }}
    >
      {children}
      {isOpenModal && <UserModal />}
    </UserContext.Provider>
  );
};
