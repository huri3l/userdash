import { FormEvent, useState } from 'react';
import { Users } from './components/Users';

function App() {
  const [filter, setFilter] = useState('');
  const [users, setUsers] = useState([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await fetch(`http://localhost:3333/users?q=${filter}`);
    const data = await response.json();

    setUsers(data);
  }

  return (
    <div>
      <h1>Usuários</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        &nbsp;
        <button type="submit">Procurar</button>
      </form>

      <Users users={users} />
    </div>
  );
}

export default App;
