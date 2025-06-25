import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';

export const App = () => {
  return (
    <>
      <AppRoutes />

      <Toaster position="bottom-center" />
    </>
  );
};
