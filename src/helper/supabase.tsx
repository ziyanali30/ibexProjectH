import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient("https://derhjzjgqhzkqefjmrer.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlcmhqempncWh6a3FlZmptcmVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzY2MTM1MSwiZXhwIjoyMDQzMjM3MzUxfQ.NhgMg73KrbNCw1K7Fi5umpQ_nmxQzyV1rfcBuFwfF9s");
export default supabaseClient;