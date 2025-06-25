import axios from 'axios';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGooglePlay } from 'react-icons/fa';
import { LuBookmarkCheck, LuBookmarkPlus } from 'react-icons/lu';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import BaseLayout from '../layouts/BaseLayout';
import { useWishList } from '../stores/useWishList';

export const BookDetails = () => {
  const { addToWishList, removeFromWishList, isInWishList } = useWishList();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  const getBookDetails = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`,
      );

      setBook(response.data);
    } catch {
      toast.error('Não foi possível carregar os detalhes do livro');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  const handleToggleWishlist = () => {
    console.log('aqui');

    if (isInWishList(book.id)) {
      removeFromWishList(book.id);
      return;
    }

    addToWishList(book);
  };

  return (
    <BaseLayout>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-start gap-10 md:flex-row">
          <img
            src={
              book?.volumeInfo?.imageLinks?.medium ||
              book?.volumeInfo?.imageLinks?.thumbnail
            }
            alt={book?.volumeInfo?.title}
            className="h-auto max-w-full rounded object-cover md:max-w-80 xl:max-w-full"
          />

          <div>
            <h1 className="text-5xl font-bold text-gray-700">
              {book?.volumeInfo?.title}
            </h1>
            <h3 className="text-xl text-gray-600">
              {book?.volumeInfo?.subtitle}
            </h3>
            <p className="text-sm text-gray-500">
              {book?.volumeInfo?.authors?.join(', ')} •{' '}
              {dayjs(book?.volumeInfo?.publishedDate).format('YYYY')}
            </p>

            <div className="my-8 flex flex-wrap gap-2">
              <button
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-200"
                onClick={handleToggleWishlist}
              >
                {isInWishList(book?.id) ? (
                  <LuBookmarkCheck />
                ) : (
                  <LuBookmarkPlus />
                )}

                <span>
                  {isInWishList(book?.id)
                    ? 'Remover da minha lista'
                    : 'Adicionar a minha lista'}
                </span>
              </button>

              <a
                href={book?.volumeInfo?.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-2 py-1 text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-200"
              >
                <FaGooglePlay />
                <span>Ver no Google Play</span>
              </a>
            </div>

            <h6 className="text-sm font-bold text-gray-600 uppercase">
              Descrição
            </h6>
            <p>{parse(book?.volumeInfo?.description ?? '')}</p>
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
