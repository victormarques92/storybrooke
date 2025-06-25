import { BookCard } from '../components/BookCard';
import { Search } from '../components/Search';
import BaseLayout from '../layouts/BaseLayout';
import { useWishList } from '../stores/useWishList';

export const WishList = () => {
  const { getWishList } = useWishList();

  console.log('getWishList', getWishList());

  return (
    <BaseLayout>
      <Search />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {getWishList()?.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </BaseLayout>
  );
};
