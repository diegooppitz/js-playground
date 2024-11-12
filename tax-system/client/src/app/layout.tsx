import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Tax System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
