import { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Travel For You",
  description: "Travel Landing Page Using NextJS & TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`} cz-shortcut-listen="true" >
        {children}
      </body>
    </html>
  );
}
