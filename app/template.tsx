'use client';

import React, { useEffect, useLayoutEffect } from 'react';
import { useStore } from '@/model/store';
import Color from './[lang]/_components/color';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useStore((store) => ({ reset: store.reset }));
  useLayoutEffect(() => {
    reset();
  }, [reset]);

  return (
    <div id="container" w="100%" h="100%">
      {children}
      <Color />
    </div>
  );
};

export default Layout;
