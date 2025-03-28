
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aazfuzqjeszvqqlnoeoa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhemZ1enFqZXN6dnFxbG5vZW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MjAzMjMsImV4cCI6MjA1MjE5NjMyM30.oIwtoSEW2_lQHSOSXxgm36_EHgB0mfBHPtX6E024__o";
export const SITE_URL = "https://splyfinance.com";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce',
      // Set the site URL to ensure all redirects use the correct domain
      site: SITE_URL,
      redirectTo: `${SITE_URL}/auth`
    }
  }
);
