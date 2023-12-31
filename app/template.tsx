'use client';
import React from 'react';
import styles from './page.module.scss';
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['container-wrapper']} w="100%" h="100%">
      {children}
    </div>
  );
}
