import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { AuthLayout } from '../layouts/AuthLayout';
import { useRegisteredUsers } from '../stores/useRegisteredUsers';
import { useUser } from '../stores/useUser';

const validationSchema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export const SignUp = () => {
  const { registeredUsers, setNewUser } = useRegisteredUsers();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = data => {
    const emailExists = registeredUsers.some(user => user.email === data.email);

    if (emailExists) {
      toast.error('E-mail já cadastrado');

      return;
    }

    console.log(data);

    const newUser = { ...data, id: uuidv4() };

    setNewUser(newUser);
    setUser(newUser);
    navigate('/');
  };

  return (
    <AuthLayout>
      <h2 className="mb-10 text-center text-2xl font-bold">Cadastrar</h2>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input name="name" placeholder="Nome" />

          <Input name="email" type="email" placeholder="E-mail" />

          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
      </FormProvider>

      <p className="mt-4 text-center text-sm text-gray-600">
        Já tem uma conta?{' '}
        <Link to="/login" className="font-medium hover:underline">
          Fazer login
        </Link>
      </p>
    </AuthLayout>
  );
};
