const Page = async (props: { params: any }) => {
  console.log(props);
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};

export default Page;
