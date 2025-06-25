import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { AuthLayout } from '../layouts/AuthLayout';
import { useRegisteredUsers } from '../stores/useRegisteredUsers';
import { useUser } from '../stores/useUser';

const validationSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

export const SignIn = () => {
  const { registeredUsers } = useRegisteredUsers();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = data => {
    const foundUser = registeredUsers.find(
      user => user.email === data.email && user.password === data.password,
    );

    if (foundUser) {
      setUser(foundUser);

      return navigate('/');
    }

    if (!foundUser) {
      return toast.error('E-mail e/ou senha inválidos.');
    }
  };

  return (
    <AuthLayout>
      <h2 className="mb-10 text-center text-2xl font-bold">Login</h2>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input name="email" type="email" placeholder="E-mail" />

          <Input name="password" type="password" placeholder="Senha" />

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-primary hover:text-primary-dark mb-2 text-sm duration-200 ease-in-out hover:underline"
            >
              Esqueci minha senha
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </FormProvider>

      <p className="mt-4 text-center text-sm text-gray-600">
        Ainda não tem uma conta?{' '}
        <Link to="/cadastrar" className="font-medium hover:underline">
          Criar conta
        </Link>
      </p>
    </AuthLayout>
  );
};
