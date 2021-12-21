import { useState } from 'react';
import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { Users } from './components/Users';

import './styles/global.scss';
import { User } from './types/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div>
      <Header />

      <main>
        <Filter setUsers={setUsers} />

        <Users users={users} />
      </main>
    </div>
  );
}

export default App;
