export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="max-w-[1280px] mx-auto my-0">{children}</section>;
}
