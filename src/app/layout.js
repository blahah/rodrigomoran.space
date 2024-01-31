import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";

// const font = localFont({ src: './BergenMono-Regular.woff2' });
// const font = localFont({ src: './ArkibalMono-Regular.ttf' });
const font = localFont({ src: './Meltmino-Regular.ttf' });
// const font = localFont({ src: './Feldiora.otf' });

export const metadata = {
  title: "rodrigomoran.space",
  description: "Rodrigo Moran",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
