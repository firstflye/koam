export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Create: {
          email: string
          status?: string
        }
        Update: {
          email?: string
          status?: string
        }
        Insert: {
          email: string
          status?: string
        }
        Select: {
          id: string
          email: string
          created_at: string
          status: string
        }
      }
    }
    Views: {
      []: unknown
    }
    Functions: {
      []: unknown
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Select']
export type TableInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TableUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']
