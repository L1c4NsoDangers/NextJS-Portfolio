import CommonLayout from "@/components/client-view/common-layout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nacil Portfolio",
  description: "Dibuat Penuh Cinta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
