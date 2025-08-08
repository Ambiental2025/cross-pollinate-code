import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/Auth';

export default function App() {
  return (
    <BrowserRouter>
      <header className="border-b">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <Link to="/" className="font-semibold tracking-tight">Ambiental Partners</Link>
          <div className="flex gap-4">
            <Link to="/" className="hover:underline">Início</Link>
            <Link to="/auth" className="hover:underline">Entrar</Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
      <footer className="mx-auto max-w-6xl p-6 text-sm text-muted-foreground">© {new Date().getFullYear()} Ambiental Partners</footer>
    </BrowserRouter>
  );
}
