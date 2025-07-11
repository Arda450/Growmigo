import type { Metadata } from "next";
import { Quicksand, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DisclaimerBanner from "@/components/ui/disclaimer-banner";
import { Toaster } from "sonner";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Growmigo",
  description: "Unsere Wurzeln sind individuell, unser Ziel ist gemeinsam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${fredoka.variable} antialiased min-h-screen flex flex-col overflow-x-hidden w-full`}
      >
        <DisclaimerBanner />
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          richColors
          closeButton
          expand={false}
          visibleToasts={5}
        />
      </body>
    </html>
  );
}
