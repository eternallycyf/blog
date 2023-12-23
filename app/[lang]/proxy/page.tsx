const Page = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(<div>hello</div>);
    }, 100);
  });
};

export default Page;
