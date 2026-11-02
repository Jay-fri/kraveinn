import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * The application's Supabase client.
 *
 * It remains `null` until a browser-safe publishable/anon key is placed in
 * `.env.local`. This lets the UI run normally while the database schema is
 * still being designed.
 */
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: true, autoRefreshToken: true },
      })
    : null

export const isSupabaseConfigured = supabase !== null
