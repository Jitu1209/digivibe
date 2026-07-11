import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase client initialized successfully!');
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
  }
} else {
  console.warn(
    'Supabase URL or Anon Key is missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your env settings. Operations will mock-succeed locally.'
  );
}

/**
 * Saves a brochure lead to Supabase 'leads' table
 */
export async function saveLeadToSupabase(lead) {
  if (!supabase) {
    console.log('[Supabase MOCK] Saved lead to local database:', lead);
    return { data: lead, error: null };
  }

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          status: lead.status,
          course_id: lead.course_id,
          course_title: lead.course_title,
          student_details: lead.student_details || '',
          job_role: lead.job_role || '',
          created_at: new Date().toISOString()
        }
      ]);
    
    if (error) {
      console.error('[Supabase Error] Failed to insert lead:', error);
      return { data: null, error };
    }
    
    console.log('[Supabase Success] Lead logged:', data);
    return { data, error: null };
  } catch (err) {
    console.error('[Supabase Exception] Error saving lead:', err);
    return { data: null, error: err };
  }
}

/**
 * Saves a registered user to Supabase 'users' table
 */
export async function saveUserToSupabase(user) {
  if (!supabase) {
    console.log('[Supabase MOCK] Saved user to local database:', user);
    return { data: user, error: null };
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          name: user.name,
          email: user.email,
          phone: user.phone,
          student_id: user.studentId,
          created_at: new Date().toISOString()
        }
      ]);
    
    if (error) {
      console.error('[Supabase Error] Failed to insert user:', error);
      return { data: null, error };
    }
    
    console.log('[Supabase Success] User logged:', data);
    return { data, error: null };
  } catch (err) {
    console.error('[Supabase Exception] Error saving user:', err);
    return { data: null, error: err };
  }
}
