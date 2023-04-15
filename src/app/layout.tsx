import { ClientProvider } from "@/utils/trpc/trpc";
import "./globals.css";

export const metadata = {
  title: "Edgest NextJS + tRPC",
  description: "Edgest NextJS with tRPC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClientProvider>
  );
}
