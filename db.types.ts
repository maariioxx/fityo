// @ts-nocheck

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  fityo: {
    Tables: {
      users: {
        Row: {
          auth_user_id: string;
          birthdate: string;
          created_at: string;
          genre: string;
          id: string;
          username: string;
        };
        Insert: {
          auth_user_id: string;
          birthdate: string;
          created_at?: string;
          genre: string;
          id?: string;
          username: string;
        };
        Update: {
          auth_user_id?: string;
          birthdate?: string;
          created_at?: string;
          genre?: string;
          id?: string;
          username?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'fityo_users_auth_user_id_fkey';
            columns: ['auth_user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      measures: {
        Row: {
          user_id: string;
          height?: string;
          weight?: string;
          neck?: string;
          chest?: string;
          arm?: string;
          belly?: string;
          leg?: string;
          date: string;
        };
        Insert: {
          user_id: string;
          height?: string;
          weight?: string;
          neck?: string;
          chest?: string;
          arm?: string;
          belly?: string;
          leg?: string;
          date: string;
        };
        Update: {
          user_id: string;
          height?: string;
          weight?: string;
          neck?: string;
          chest?: string;
          arm?: string;
          belly?: string;
          leg?: string;
          date?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  next_auth: {
    Tables: {
      accounts: {
        Row: {
          access_token: string | null;
          expires_at: number | null;
          id: string;
          id_token: string | null;
          oauth_token: string | null;
          oauth_token_secret: string | null;
          provider: string;
          providerAccountId: string;
          refresh_token: string | null;
          refresh_token_expires_in: number | null;
          scope: string | null;
          session_state: string | null;
          token_type: string | null;
          type: string;
          userId: string | null;
        };
        Insert: {
          access_token?: string | null;
          expires_at?: number | null;
          id?: string;
          id_token?: string | null;
          oauth_token?: string | null;
          oauth_token_secret?: string | null;
          provider: string;
          providerAccountId: string;
          refresh_token?: string | null;
          refresh_token_expires_in?: number | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
          type: string;
          userId?: string | null;
        };
        Update: {
          access_token?: string | null;
          expires_at?: number | null;
          id?: string;
          id_token?: string | null;
          oauth_token?: string | null;
          oauth_token_secret?: string | null;
          provider?: string;
          providerAccountId?: string;
          refresh_token?: string | null;
          refresh_token_expires_in?: number | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
          type?: string;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'accounts_userId_fkey';
            columns: ['userId'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      sessions: {
        Row: {
          expires: string;
          id: string;
          sessionToken: string;
          userId: string | null;
        };
        Insert: {
          expires: string;
          id?: string;
          sessionToken: string;
          userId?: string | null;
        };
        Update: {
          expires?: string;
          id?: string;
          sessionToken?: string;
          userId?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'sessions_userId_fkey';
            columns: ['userId'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      users: {
        Row: {
          email: string | null;
          emailVerified: string | null;
          id: string;
          image: string | null;
          name: string | null;
        };
        Insert: {
          email?: string | null;
          emailVerified?: string | null;
          id?: string;
          image?: string | null;
          name?: string | null;
        };
        Update: {
          email?: string | null;
          emailVerified?: string | null;
          id?: string;
          image?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      verification_tokens: {
        Row: {
          expires: string;
          identifier: string | null;
          token: string;
        };
        Insert: {
          expires: string;
          identifier?: string | null;
          token: string;
        };
        Update: {
          expires?: string;
          identifier?: string | null;
          token?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      uid: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  nutrition: {
    Tables: {
      calories_info: {
        Row: {
          friday_calories: number | null;
          id: string;
          monday_calories: number | null;
          saturday_calories: number | null;
          sunday_calories: number | null;
          thursday_calories: number | null;
          total_calories: number | null;
          tuesday_calories: number | null;
          user_id: string;
          wednesday_calories: number | null;
        };
        Insert: {
          friday_calories?: number | null;
          id?: string;
          monday_calories?: number | null;
          saturday_calories?: number | null;
          sunday_calories?: number | null;
          thursday_calories?: number | null;
          total_calories?: number | null;
          tuesday_calories?: number | null;
          user_id: string;
          wednesday_calories?: number | null;
        };
        Update: {
          friday_calories?: number | null;
          id?: string;
          monday_calories?: number | null;
          saturday_calories?: number | null;
          sunday_calories?: number | null;
          thursday_calories?: number | null;
          total_calories?: number | null;
          tuesday_calories?: number | null;
          user_id?: string;
          wednesday_calories?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'nutrition_calories_info_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      carbohidrates_info: {
        Row: {
          friday_carbohidrates: number | null;
          id: string;
          monday_carbohidrates: number | null;
          saturday_carbohidrates: number | null;
          sunday_carbohidrates: number | null;
          thursday_carbohidrates: number | null;
          total_carbohidrates: number | null;
          tuesday_carbohidrates: number | null;
          user_id: string;
          wednesday_carbohidrates: number | null;
        };
        Insert: {
          friday_carbohidrates?: number | null;
          id?: string;
          monday_carbohidrates?: number | null;
          saturday_carbohidrates?: number | null;
          sunday_carbohidrates?: number | null;
          thursday_carbohidrates?: number | null;
          total_carbohidrates?: number | null;
          tuesday_carbohidrates?: number | null;
          user_id: string;
          wednesday_carbohidrates?: number | null;
        };
        Update: {
          friday_carbohidrates?: number | null;
          id?: string;
          monday_carbohidrates?: number | null;
          saturday_carbohidrates?: number | null;
          sunday_carbohidrates?: number | null;
          thursday_carbohidrates?: number | null;
          total_carbohidrates?: number | null;
          tuesday_carbohidrates?: number | null;
          user_id?: string;
          wednesday_carbohidrates?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'nutrition_carbohidrates_info_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      diets_foods: {
        Row: {
          calories: number;
          carbs: number;
          created_at: string;
          date: string;
          fats: number;
          food_id: string;
          id: string;
          name: string;
          protein: number;
          quantity: number;
          saturated_fats: number;
          sugar: number;
          user_id: string;
        };
        Insert: {
          calories: number;
          carbs: number;
          created_at?: string;
          date: string;
          fats: number;
          food_id: string;
          id?: string;
          name: string;
          protein: number;
          quantity: number;
          saturated_fats: number;
          sugar: number;
          user_id?: string;
        };
        Update: {
          calories?: number;
          carbs?: number;
          created_at?: string;
          date?: string;
          fats?: number;
          food_id?: string;
          id?: string;
          name?: string;
          protein?: number;
          quantity?: number;
          saturated_fats?: number;
          sugar?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'nutrition_diets_foods_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      fats_info: {
        Row: {
          friday_fats: number | null;
          id: string;
          monday_fats: number | null;
          saturday_fats: number | null;
          sunday_fats: number | null;
          thursday_fats: number | null;
          total_fats: number | null;
          tuesday_fats: number | null;
          user_id: string;
          wednesday_fats: number | null;
        };
        Insert: {
          friday_fats?: number | null;
          id?: string;
          monday_fats?: number | null;
          saturday_fats?: number | null;
          sunday_fats?: number | null;
          thursday_fats?: number | null;
          total_fats?: number | null;
          tuesday_fats?: number | null;
          user_id: string;
          wednesday_fats?: number | null;
        };
        Update: {
          friday_fats?: number | null;
          id?: string;
          monday_fats?: number | null;
          saturday_fats?: number | null;
          sunday_fats?: number | null;
          thursday_fats?: number | null;
          total_fats?: number | null;
          tuesday_fats?: number | null;
          user_id?: string;
          wednesday_fats?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'nutrition_fats_info_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      custom_foods: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          quantity: number;
          calories: number;
          carbohydrates: number;
          sugar: number;
          fats: number;
          saturated_fats: number;
          protein: number;
          user_id: string;
        };
        Insert: {
          id?: number;
          created_at?: string;
          name?: string;
          quantity?: number;
          calories?: number;
          carbohydrates?: number;
          sugar?: number;
          fats?: number;
          saturated_fats?: number;
          protein?: number;
          user_id?: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          name?: string;
          quantity?: number;
          calories?: number;
          carbohydrates?: number;
          sugar?: number;
          fats?: number;
          saturated_fats?: number;
          protein?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'nutrition_custom_foods_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      protein_info: {
        Row: {
          friday_protein: number | null;
          id: string;
          monday_protein: number | null;
          saturday_protein: number | null;
          sunday_protein: number | null;
          thursday_protein: number | null;
          total_protein: number | null;
          tuesday_protein: number | null;
          user_id: string;
          wednesday_protein: number | null;
        };
        Insert: {
          friday_protein?: number | null;
          id?: string;
          monday_protein?: number | null;
          saturday_protein?: number | null;
          sunday_protein?: number | null;
          thursday_protein?: number | null;
          total_protein?: number | null;
          tuesday_protein?: number | null;
          user_id: string;
          wednesday_protein?: number | null;
        };
        Update: {
          friday_protein?: number | null;
          id?: string;
          monday_protein?: number | null;
          saturday_protein?: number | null;
          sunday_protein?: number | null;
          thursday_protein?: number | null;
          total_protein?: number | null;
          tuesday_protein?: number | null;
          user_id?: string;
          wednesday_protein?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'nutrition_protein_info_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
      Database['public']['Views'])
  ? (Database['public']['Tables'] &
      Database['public']['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
  ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
  ? Database['public']['Enums'][PublicEnumNameOrOptions]
  : never;
