import { ClientProvider } from "@/utils/trpc/client";
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
    <ClientProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClientProvider>
  );
}
