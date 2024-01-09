"use client"

import { createContext, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export const AuthContext = createContext(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null)
  const supabase = createClient()

  useEffect(() => {
    let ignore = false;

    const getUser = async () => {
      const { data: user } = await supabase.auth.getUser()
      if (!ignore) {
        setUser(user)
      }
    }

    getUser()

    return () => {
      ignore = true;
    };
  }, [])

  const value = {
    user,
    // add more custom methods or properties here
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
