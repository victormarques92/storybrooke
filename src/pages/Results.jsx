import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { BookCard } from '../components/BookCard';
import { Search } from '../components/Search';
import BaseLayout from '../layouts/BaseLayout';

export const Results = () => {
  const [search] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState();

  const getResults = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search.get('q')}`,
      );

      setResults(response.data);
    } catch {
      toast.error('Error ao buscar livros');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResults();
  }, [search]);

  return (
    <BaseLayout>
      <Search />

      {loading ? (
        <div className="mt-6 flex justify-center">
          <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {results?.items.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </BaseLayout>
  );
};
