import { Navigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useUser } from '../stores/useUser';

export const AuthLayout = ({ children }) => {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100 bg-[url('/src/assets/bg-auth-layout.jpg')] bg-cover bg-center bg-no-repeat p-3 after:absolute after:inset-0 after:bg-black/70">
      <div className="relative z-10 flex flex-col items-center lg:w-full lg:max-w-4xl lg:flex-row lg:items-stretch">
        {/* lado esquerdo */}
        <div className="bg-primary w-full rounded-tl-3xl rounded-tr-3xl px-6 py-8 text-center lg:w-1/2 lg:rounded-tr-none lg:rounded-bl-3xl">
          <img
            src={logo}
            alt="Logo StoryBrooke"
            className="mx-auto mb-4 block"
          />

          <h1 className="mb-10 text-3xl font-bold text-white">
            Bem vindo à sua plataforma de indicações de livros
          </h1>

          <p className="text-white">
            "Descubra novos mundos e autores para apaixonar-se através das
            nossas recomendações."
          </p>
        </div>

        {/* lado direito */}
        <div className="w-full rounded-br-3xl rounded-bl-3xl bg-white px-6 py-8 lg:w-1/2 lg:rounded-tr-3xl lg:rounded-bl-none">
          <h1 className="font-kameron text-primary mb-8 text-center font-serif text-3xl font-semibold">
            Story Brooke
          </h1>

          {children}
        </div>
      </div>
    </div>
  );
};
