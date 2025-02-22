import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Suspense} from "react";
import Loading from "@/app/loading";

const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: 'Pokédex - Modern Pokemon Explorer',
  description: 'Explore Pokemon with a modern, minimalist interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background`}>
      <Suspense
          fallback={<Loading/>}
      >
            {children}
      </Suspense>
      </body>
    </html>
  );
}