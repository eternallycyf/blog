'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { useStore } from '@/model/store';
import Color from './_components/color';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useStore((store) => ({ reset: store.reset }));
  useLayoutEffect(() => {
    reset();
  }, [reset]);

  return (
    <>
      {children}
      <Color />
    </>
  );
};

export default Layout;
