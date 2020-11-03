import {
  FC, PropsWithChildren, useState, createContext, Context, Provider, Dispatch, SetStateAction, useContext, memo, useMemo
} from 'react';
import { defaultStates, stateType } from './defaultState';

type contextEntry<T = any> = {
  state: T,
  setState: Dispatch<SetStateAction<T>>
  GetContext: Context<T>,
  SetContext: Context<Dispatch<SetStateAction<T>>>,
  GetProvider: Provider<T>,
  SetProvider: Provider<Dispatch<SetStateAction<T>>>,
};

interface contextDict {
  [key: string]: contextEntry
}

const globalContext: contextDict = {};
Object.entries(defaultStates).forEach(([property, defaultState]) => {
  type propertyType = typeof defaultState;
  const defaultSetState = (value: propertyType |((prevState: propertyType) => propertyType)) => {};
  const GetContext = createContext(defaultState);
  const SetContext = createContext(defaultSetState);
  const GetProvider = GetContext.Provider;
  const SetProvider = SetContext.Provider;
  const newState: contextEntry<propertyType> = {
    state: defaultState,
    setState: defaultSetState,
    GetContext,
    SetContext,
    GetProvider,
    SetProvider
  };
  globalContext[property] = newState;
});

type GlobalProviderProps = PropsWithChildren<{}>;
export const GlobalProvider: FC<GlobalProviderProps> = ({ children }: GlobalProviderProps) => {
  Object.entries(globalContext).forEach(([property, propertyObj]) => {
    const currentState = propertyObj.state;
    const [state, setState] = useState<typeof currentState>(currentState);
    globalContext[property] = { ...propertyObj, state, setState };
  });

  return (
    Object.values(globalContext).reduce((acc, entry) => {
      const {
        state, setState, GetProvider, SetProvider
      } = entry;

      return (
        <GetProvider value={state}>
          <SetProvider value={setState}>
            {acc}
          </SetProvider>
        </GetProvider>
      );
    }, <>{children}</>)
  );
};

export const getGlobalContext = (propertyName: string) => useContext(globalContext[propertyName].GetContext);
export const setGlobalContext = (propertyName: string) => useContext(globalContext[propertyName].SetContext);

export default globalContext;
