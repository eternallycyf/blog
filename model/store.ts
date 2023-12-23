import { themeColorList } from '@/theme/color';
import { createContext, useContext } from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';

interface StoreInterface {
  themeColorList: string[];
  themeColor: string;
  randomThemeColorIndex: number;
  reset: () => void;
}

const getDefaultInitialState = () => ({
  themeColorList: themeColorList,
  themeColor: themeColorList[0],
  randomThemeColorIndex: 0,
});

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error('Store is missing the provider');

  return useZustandStore(store, selector);
};

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {},
) => {
  return createStore<StoreInterface>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    reset: () => {
      const index = Math.floor(Math.random() * themeColorList.length);
      document.body.classList.add('theme-' + (index + 1));
      set({
        themeColor: themeColorList[index],
        randomThemeColorIndex: index,
      });
    },
  }));
};
