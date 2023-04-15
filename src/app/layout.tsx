import "./globals.css";

export const metadata = {
  title: "Edest NextJS + tRPC",
  description: "Edgest NextJS with tRPC",
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
