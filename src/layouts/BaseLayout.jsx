import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function BaseLayout({ children }) {
  return (
    <div>
      <Header />

      <main className="min-h-[calc(100vh-140px)] p-8">{children}</main>

      <Footer />
    </div>
  );
}
