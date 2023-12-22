import type { Metadata } from "next";
import "./globals.css";
import { ukijtuz } from "./fonts";
import { cn } from "@/lib/utils";

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
      <body className={cn(ukijtuz.className, "relative h-full antialiased")}>
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
