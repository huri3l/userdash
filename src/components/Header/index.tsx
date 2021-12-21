import './styles.scss';
import { memo } from 'react';

export function HeaderComponent() {
  return (
    <header>
      <h1>UserDash</h1>
    </header>
  );
}

export const Header = memo(HeaderComponent);
