'use client';

import {
  type PropsWithChildren,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react';
import type { StoreType } from './store';
import { initializeStore, Provider, useStore } from './store';

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(props);
  }

  useEffect(() => {
    initializeStore().getState().reset();
  }, []);

  return <Provider value={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
