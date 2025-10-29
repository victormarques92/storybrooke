import { FaWhatsapp } from 'react-icons/fa';
import bookClubImage from '../assets/clube-do-livro.png';
import BaseLayout from '../layouts/BaseLayout';

export const BookClub = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col text-white md:flex-row md:justify-center">
        {/* ================================= */}
        {/* Clube do Livro                    */}
        {/* ================================= */}
        <div className="bg-primary/70 w-full rounded-tl-3xl rounded-tr-3xl p-8 px-6 py-12 md:max-w-[528px] md:rounded-tl-3xl md:rounded-tr-none md:rounded-bl-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Clube do Livro
          </h2>

          <p className="text-center text-lg">
            Junte-se a uma comunidade apaixonada por leitura, onde
            compartilhamos indicações, discutimos livros e crescemos juntos como
            leitores.
          </p>

          <img
            src={bookClubImage}
            alt="Clube do Livro"
            className="mx-auto mt-12 w-full max-w-[400px]"
          />
        </div>

        {/* ================================= */}
        {/* Como funciona                     */}
        {/* ================================= */}
        <div className="bg-primary w-full rounded-br-3xl rounded-bl-3xl p-8 px-6 py-12 md:max-w-[724px] md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-none">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Como Funciona
          </h2>
          <p className="text-center text-lg">
            Nosso clube do livro é aberto a todos! Todo mês escolhemos um livro
            para ler e discutir em um grupo no WhatsApp.
          </p>
          <h3 className="mt-12 text-lg font-bold">Participantes podem:</h3>

          <ul className="mb-12 list-inside list-disc text-lg">
            <li>Comentar sobre os capítulos e ideias do livro.</li>
            <li>Sugerir livros para os próximos meses.</li>
            <li>Trocar opiniões com outros leitores.</li>
          </ul>

          <div className="flex justify-center">
            <a
              href="https://chat.whatsapp.com/F0lPaNUXAAxBqnjsjV8Umh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mx-auto inline-flex cursor-pointer items-center gap-2 rounded-4xl bg-white px-6 py-3 font-medium transition-colors duration-300 ease-in-out hover:bg-white/95"
            >
              <FaWhatsapp color="#25d366" size={24} />
              Entrar no grupo do WhatsApp
            </a>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
