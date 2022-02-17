import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { Users } from './components/Users';
import { UserContextProvider } from './contexts/UserContext';
import { ToastContainer } from 'react-toastify';

import './styles/global.scss';
import 'react-toastify/dist/ReactToastify.min.css';

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

      <ToastContainer />
    </div>
  );
}

export default App;
