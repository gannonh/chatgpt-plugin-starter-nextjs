export const metadata = {
  title: "ChatGPT Plugin Starter TypeScript NextJS",
  description: "ChatGPT Plugin starter app for NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
