'use client';
import { useStore } from '@/model/store';
import variables from '@/styles/variables.module.scss';
import React from 'react';

const Color = () => {
  const themeColor = useStore((state) => state.themeColor);

  return (
    <>
      <h2 style={{ color: `${themeColor}` }}>this is my theme</h2>
      <h1 style={{ color: `${variables.colorPrimary}` }}>Hello, scss!</h1>
    </>
  );
};

export default Color;
