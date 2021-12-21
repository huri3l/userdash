import { FormEvent, useState } from 'react';
import { User } from '../../types/user';
import './styles.scss';

interface FilterProps {
  setUsers: (data: User[]) => void;
}

export function Filter({ setUsers }: FilterProps) {
  const [filter, setFilter] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const data = await response.json();

    setUsers(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar usuários"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      &nbsp;
      <button type="submit">Filtrar</button>
    </form>
  );
}
