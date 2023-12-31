const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container" w="100%" h="100%">
      {children}
    </div>
  );
};

export default Template;
