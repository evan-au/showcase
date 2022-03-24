import { ApiError, Session, User } from '@supabase/supabase-js';

export interface AdminUserInterface {
  user: User | null;
  session: Session | null;
  error: ApiError | null;
}
