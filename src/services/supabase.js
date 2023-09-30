import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hiioqbztscyvmcavphxb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpaW9xYnp0c2N5dm1jYXZwaHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MzcyNzgsImV4cCI6MjAxMTUxMzI3OH0.kiWhuR4qGpjmM4XDyVlYz9QhHEhV7Eoic5-ibEnwXT4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
