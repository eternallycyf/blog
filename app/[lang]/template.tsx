import Loading from '@/app/[lang]/loading';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div id="container" w="100%" h="100%">
      {children}
    </div>
  );
}
