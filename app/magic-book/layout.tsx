export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div
  className="bg-[url('/purplebg.jpg')] bg-cover"
  >{children}</div>;
}
