const Page = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(<div>hello</div>);
    }, 2000);
  });
};

export default Page;
