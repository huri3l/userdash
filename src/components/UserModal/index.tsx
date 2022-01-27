import { FormEvent, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './styles.scss';
import { IoClose, IoCheckmark } from 'react-icons/io5';

export function UserModal() {
  const {
    setIsOpenModal,
    selectedUser,
    updateUser,
    createUser,
    formName,
    setFormName,
    formEmail,
    setFormEmail,
    formPhone,
    setFormPhone,
    formCountry,
    setFormCountry,
    formState,
    setFormState,
    formStreet,
    setFormStreet,
    formNumber,
    setFormNumber,
    formAvatar,
    setFormAvatar,
  } = useContext(UserContext);

  function handleClose() {
    setIsOpenModal(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (selectedUser !== -1) {
      updateUser();
    } else {
      createUser();
    }

    window.location.reload();
  }

  return (
    <div className="overlay">
      <div className="container">
        <div>
          <strong>Criar usuário</strong>
          <button type="button" onClick={handleClose}>
            <IoClose />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <main>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                id="phone"
                value={formPhone}
                onChange={(e) => setFormPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="country">País</label>
              <input
                type="text"
                id="country"
                value={formCountry}
                onChange={(e) => setFormCountry(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                id="state"
                value={formState}
                onChange={(e) => setFormState(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="street">Rua</label>
              <input
                type="text"
                id="street"
                value={formStreet}
                onChange={(e) => setFormStreet(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                value={formNumber}
                onChange={(e) => setFormNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="avatar">Foto de perfil (link)</label>
              <input
                type="text"
                id="avatar"
                value={formAvatar}
                onChange={(e) => setFormAvatar(e.target.value)}
              />
            </div>
          </main>
          <footer>
            <button type="submit">
              <IoCheckmark />
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
