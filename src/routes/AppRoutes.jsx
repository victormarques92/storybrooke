import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookClub } from '../pages/BookClub';
import { BookDetails } from '../pages/BookDetails';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Home } from '../pages/Home';
import { ResetPassword } from '../pages/ResetPassword';
import { Results } from '../pages/Results';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { WishList } from '../pages/WishList';
import { PrivateRoute } from './PrivateRoute';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =================================== */}
        {/* AUTH ROUTES                         */}
        {/* =================================== */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/cadastrar" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* =================================== */}
        {/* PRIVATE ROUTES                      */}
        {/* =================================== */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/results"
          element={
            <PrivateRoute>
              <Results />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/:bookId"
          element={
            <PrivateRoute>
              <BookDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        />
        <Route
          path="/clube-do-livro"
          element={
            <PrivateRoute>
              <BookClub />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
