import { FormProvider, useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IconButton } from '../components/IconButton';
import { Input } from '../components/Input';

export const Search = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      search: search.get('q') || '',
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = async data => {
    navigate({
      pathname: '/results',
      search: `?q=${data.search}`,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-14 flex gap-3">
        <div className="relative w-full">
          <Input
            name="search"
            placeholder="Buscar por nome do livro, autor, genero..."
          />

          <IconButton
            className="absolute top-1 right-2"
            type="submit"
            icon={<FiSearch />}
          />
        </div>
      </form>
    </FormProvider>
  );
};
