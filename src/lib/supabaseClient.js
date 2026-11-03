// Loaded on demand (see supabase.js) so the Supabase SDK stays out of the first page load.
import { createClient } from '@supabase/supabase-js'
import { backendReady } from './supabase.js'

export const supabase = backendReady ? createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY) : null
