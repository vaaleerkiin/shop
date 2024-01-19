import { Header } from "@/components/Header/Header";
import { Provides } from "@/components/Providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Vaaleerkiin's Shop",
  description: "Vaaleerkiin's Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provides>
          <Header></Header>
          {children}
        </Provides>
      </body>
    </html>
  );
}
