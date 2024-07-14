import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientSessionProvider } from '../SessionProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice Scanner",
  description: "Scan your invoices to be saved",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientSessionProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
    </ClientSessionProvider>

  );
}
