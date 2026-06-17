import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Server-side only - uses the service role key. Never import this from a
// Client Component. The pattern mirrors youtube-engine/lib/supabase/client.ts:
// lazy singleton + cache-busting fetch so Next's data cache never freezes
// a row read in a stale state.
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
    _client = createClient(url, key, {
      global: {
        fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
      },
    });
  }
  return _client;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return getClient()[prop as keyof SupabaseClient];
  },
});
