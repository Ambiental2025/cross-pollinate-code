import { FormEvent, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setMessage('Autenticado com sucesso!');
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Conta criada! Verifique seu e-mail.');
      }
    } catch (err: any) {
      setMessage(err.message ?? 'Erro ao autenticar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto animate-fade-in">
      <h1 className="text-2xl font-semibold tracking-tight mb-4">{mode === 'signin' ? 'Entrar' : 'Criar conta'}</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block">
          <span className="block mb-1">E-mail</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" />
        </label>
        <label className="block">
          <span className="block mb-1">Senha</span>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded px-3 py-2" />
        </label>
        <div className="flex items-center gap-3">
          <button disabled={loading} className="border rounded px-4 py-2">{loading ? 'Aguarde...' : (mode === 'signin' ? 'Entrar' : 'Cadastrar')}</button>
          <button type="button" className="text-sm underline" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
            {mode === 'signin' ? 'Criar conta' : 'Já tenho conta'}
          </button>
        </div>
        {message && <p className="text-sm">{message}</p>}
      </form>
    </section>
  );
}
