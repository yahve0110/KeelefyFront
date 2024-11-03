"use client"
import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/sidebar";
import Chatbot from "@/components/Chatbot/ChatBot";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="flex h-screen ">
          <Sidebar />
          <main className="flex flex-grow p-4  justify-center mt-7">
            {children}
          </main>
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
