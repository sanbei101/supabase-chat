import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('环境变量缺失！请确保已配置以下环境变量：\n' + '- VITE_SUPABASE_URL\n' + '- VITE_SUPABASE_ANON_KEY');
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
