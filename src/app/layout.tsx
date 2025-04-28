import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Lead Snap",
  description: "CRM app for Leads Management",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased h-screen bg-slate-700`}>
        <div className="globalContainer">
          <Header />
          <div className="contentContainer">
            <Sidebar />
            <div className="p-4 sm:ml-64 bg-slate-500">
              <div className="border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14 h-screen bg-slate-700">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
