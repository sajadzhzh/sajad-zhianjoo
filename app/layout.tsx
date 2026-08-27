import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Index";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "سجاد ژیانجو",
  description: "وبسایت شخصی سجاد ژیانجو با معرفی و ارائه نمونه کارهای من",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${vazir.variable} h-full`}
    >
      <body className="min-h-svh space-y-5">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
