'use client';

import { Session } from '@/types/session';
import { createContext, useContext } from 'react';

interface ISessionProviderProps {
  children: React.ReactNode;
  session: any;
}

export const SessionContext = createContext<Session>({
  user: {
    sub: '',
    name: '',
    iat: ''
  }
});

export const SessionProvider = ({ children, session }: ISessionProviderProps) => {
  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  return useContext(SessionContext);
};
