import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />

        <main className="mx-auto w-full max-w-[1400px] px-4 py-6">
          {children}
        </main>

        <footer className="mt-12 border-t bg-white">
          <div className="mx-auto max-w-[1400px] px-4 py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} iPhone Store. Все права защищены.
          </div>
        </footer>
      </body>
    </html>
  );
}
