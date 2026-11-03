import { useEffect, useState } from 'react'
import { backendReady, getSupabase } from '../lib/supabase.js'

// Loads all rows of a Supabase table, ordered by one column. Without a configured backend it resolves to an empty list.
export function useRows(table, order) {
  const [s, setS] = useState({ rows: [], loading: true, error: false })
  useEffect(() => {
    if (!backendReady) { setS({ rows: [], loading: false, error: false }); return }
    let live = true
    getSupabase()
      .then((supabase) => supabase.from(table).select('*').order(order))
      .then(({ data, error }) => { if (live) setS({ rows: data || [], loading: false, error: !!error }) })
      .catch(() => { if (live) setS({ rows: [], loading: false, error: true }) })
    return () => { live = false }
  }, [table, order])
  return s
}
