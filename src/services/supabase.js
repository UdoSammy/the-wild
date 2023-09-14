import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dvcljwlpyovlfrqrtdnb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2Y2xqd2xweW92bGZycXJ0ZG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNDYzNzIsImV4cCI6MjAwODgyMjM3Mn0.qU9Mg3vdOrJEzNefoD9BB9K3uWpcR5o0JvqSCOL_aDQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

