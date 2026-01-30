import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "iPhone Store",
  description: "Интернет-магазин техники Apple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
