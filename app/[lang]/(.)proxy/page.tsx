import React from 'react';

const Page = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(<div>proxy</div>);
    }, 100);
  });
};

export default Page;
