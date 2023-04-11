import { createClient } from '@supabase/supabase-js'

const URL = "https://mwnxrrrogdznsyybsnfb.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13bnhycnJvZ2R6bnN5eWJzbmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExODk0MTEsImV4cCI6MTk5Njc2NTQxMX0.QHEZfrrG_Kg15SDEd77Xc7yjskvwv7W_h5pzdFuf-JQ"

export const supabase = createClient(URL, API_KEY);