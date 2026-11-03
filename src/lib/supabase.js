// Public values only (never a service_role key). Without both, forms fall back to a "please email us" message.
export const backendReady = Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)

export const getSupabase = () => import('./supabaseClient.js').then((m) => m.supabase)
