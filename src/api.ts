import { supabase } from '@/supabase';

export type Message = {
  id: string;
  text: string;
  author: string;
  created_at: string;
};

export type User = {
  id: number;
  name: string;
  online: boolean;
};

export async function fetchMessages(page: number = 1): Promise<Message[]> {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
    .range((page - 1) * 10, page * 10 - 1);

  if (error) {
    throw new Error('API - Fetch Messages - Error: ' + error.message);
  }

  return data || [];
}
export async function createMessage(message: Message) {
  const { error } = await supabase.from('messages').insert(message);

  if (error) {
    throw new Error('API - Create Message - Error: ' + error.message);
  }

  return error === null;
}
export async function createUser(user: User) {
  const { error } = await supabase.from('users').insert(user);

  if (error) {
    throw new Error('API - Create User - Error: ' + error.message);
  }

  return error === null;
}
