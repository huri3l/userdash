import { FormEvent, useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.scss';

export function Filter() {
  const [filter, setFilter] = useState('');

  const { filterUsers } = useContext(UserContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    filterUsers(filter);
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
