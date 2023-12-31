import React from 'react';

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="container" w="100%" h="100%">
      {children}
    </div>
  );
}
