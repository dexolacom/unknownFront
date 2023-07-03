import { IShutterMethods } from '@/components/blocks/shutter/shutter';
import React from 'react';
import { useMemo, useState, Dispatch, SetStateAction } from 'react';

interface IShutterContext {
  methods: IShutterMethods;
  setMethods: Dispatch<SetStateAction<IShutterMethods>>;
}
interface IShutterProviderProps {
  children: React.ReactNode;
}

export const ShutterContext = React.createContext({
  methods: {} as IShutterMethods,
  setMethods: {} as Dispatch<SetStateAction<IShutterMethods>>,
});

export default function ShutterProvider({ children }: IShutterProviderProps) {
  const [methods, setMethods] = useState<IShutterMethods>(
    {} as IShutterMethods,
  );
  const value: IShutterContext = {
    methods,
    setMethods,
  };

  return (
    <ShutterContext.Provider value={value}>{children}</ShutterContext.Provider>
  );
}
