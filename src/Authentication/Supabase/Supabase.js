// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


const useAuth = () => {
    const user = supabase.auth.user(); // Accessing auth functionality through supabase.auth
  
    return { user }; // Return whatever authentication-related data you need
  };
  
  export { useAuth };