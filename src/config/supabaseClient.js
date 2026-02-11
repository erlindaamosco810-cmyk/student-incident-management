// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Make sure your environment variables are named correctly
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_ANON_KEY;

// Create the Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
git
export default supabase;
