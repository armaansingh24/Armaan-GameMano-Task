import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/LayoutComponents/Footer/Footer";
import ClientProvider from "./ClientProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <ClientProvider>
          <div className="flex h-screen overflow-x-hidden scrollbar-hide">
            <div className="flex flex-col w-full">
              <main className="flex-1 mt-20">{children}</main>
              <Footer />
            </div>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
