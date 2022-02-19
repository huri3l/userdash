import { FormEvent, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.scss';

export function Filter() {
  const { setIsOpenModal, setSelectedUser, filter, setFilter } = useContext(UserContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleCreate() {
    setSelectedUser(-1);

    setIsOpenModal(true);
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
      <button type="button" onClick={handleCreate}>
        Criar
      </button>
    </form>
  );
}
