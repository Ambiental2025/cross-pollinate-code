import { createClient } from '@supabase/supabase-js';

// Configure com suas credenciais públicas do Supabase
// Dica: por serem chaves publicáveis (anon), você pode colocá-las aqui.
const supabaseUrl = (window as any).__SUPABASE_URL__ ?? 'https://YOUR_PROJECT_REF.supabase.co';
const supabaseAnonKey = (window as any).__SUPABASE_ANON_KEY__ ?? 'YOUR_ANON_PUBLIC_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
