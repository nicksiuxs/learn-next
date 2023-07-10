import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning NextJS 13",
  description: "I'm learning Next.js version 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
