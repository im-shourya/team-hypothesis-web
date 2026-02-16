import { createClient } from '@supabase/supabase-js';

// 1. Force Vite to read the specific variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 2. Add a check to see if they are missing (Helps debugging)
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key. Check your .env file!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);