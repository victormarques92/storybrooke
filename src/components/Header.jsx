import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useUser } from '../stores/useUser';
import { Button } from './Button';

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout } = useUser();

  const links = [
    { name: 'Início', href: '/' },
    { name: 'Lista de Leitura', href: '/wishlist' },
    { name: 'Clube Do Livro', href: '/clube-do-livro' },
  ];

  const handleLogout = () => {
    logout();

    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4 shadow-md">
      {/* Logo + Nome */}
      <a className="flex items-center gap-2" href="/">
        <img src={logo} alt="Logo StoryBrooke" className="w-10" />
        <span className="text-primary text-2xl font-bold">StoryBrooke</span>
      </a>

      {/* Navegação + Login tudo junto à direita */}
      <div className="flex items-center space-x-8 text-[16px]">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? 'font-semibold text-black'
                : 'text-gray-500 hover:text-black'
            }
          >
            {link.name}
          </a>
        ))}

        <Button onClick={handleLogout}>SAIR</Button>
      </div>
    </header>
  );
};
