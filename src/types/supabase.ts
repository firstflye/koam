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
        Row: {
          id: string
          email: string
          created_at: string
          status: string
        }
        Insert: {
          email: string
          id?: string
          created_at?: string
          status?: string
        }
        Update: {
          email?: string
          id?: string
          created_at?: string
          status?: string
        }
      }
    }
    Views: { [_: string]: unknown }
    Functions: { [_: string]: unknown }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TableInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TableUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']
