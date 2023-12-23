const Layout = ({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) => {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
};

export default Layout;
