import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BookCategory } from '../components/BookCategory';
import { Search } from '../components/Search';
import BaseLayout from '../layouts/BaseLayout';

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCatogories = async () => {
    setLoading(true);

    try {
      const [romance, biography, drama, fiction] = await Promise.all([
        axios.get('https://www.googleapis.com/books/v1/volumes?q=romance'),
        axios.get('https://www.googleapis.com/books/v1/volumes?q=biography'),
        axios.get('https://www.googleapis.com/books/v1/volumes?q=drama'),
        axios.get('https://www.googleapis.com/books/v1/volumes?q=fiction'),
      ]);

      setCategories([
        romance.data.items,
        biography.data.items,
        drama.data.items,
        fiction.data.items,
      ]);
    } catch {
      toast.error('Error ao buscar as categorias');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatogories();
  }, []);

  return (
    <BaseLayout>
      <Search />

      {loading && (
        <div className="mt-6 flex justify-center">
          <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
        </div>
      )}

      {!loading && categories.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {categories.map((category, index) => (
            <BookCategory key={index} books={category} />
          ))}
        </div>
      )}
    </BaseLayout>
  );
};
