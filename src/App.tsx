import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { Users } from './components/Users';
import { UserContextProvider } from './contexts/UserContext';

import './styles/global.scss';

function App() {
  return (
    <div>
      <Header />

      <main>
        <UserContextProvider>
          <Filter />

          <Users />
        </UserContextProvider>
      </main>
    </div>
  );
}

export default App;
