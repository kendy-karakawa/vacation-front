import "./globals.css";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} w-full h-screen pt-20 pb-20 p-5 flex items-start justify-center bg-gray-300 overflow-auto`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
