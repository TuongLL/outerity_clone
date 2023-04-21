import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(`https://${process.env.NEXT_PUBLIC_PROJECTREF}.supabase.co`, process.env.NEXT_PUBLIC_SUPABASE_KEY || '')