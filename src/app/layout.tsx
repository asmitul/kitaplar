import type { Metadata } from "next";
import "./globals.css";
import { ukijnsq } from "./fonts";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ug" dir="rtl">
      <body className={cn(ukijnsq.className, "relative h-full antialiased")}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
