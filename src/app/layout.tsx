import "./globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans bg-red-900 w-full h-screen px-6`}>
      <head />
      <body>
        {children}
        <footer className="flex flex-col text-center absolute bottom-0 right-0 p-2  text-slate-100  w-full bg-yellow-800 items-center justify-center">
          <span>put whatever you have in your fridge and we sort out a recipe.</span>{" "}
          <span>
            built with 🪄 by{" "}
            <a
              href="https://twitter.com/nicolaslopess__"
              className="font-bold hover:underline cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              @nicolaslopess__
            </a>
            .
          </span>
        </footer>
      </body>
    </html>
  );
}
