import Navbar from "@/layouts/Navbar";
import "./globals.css";

export const metadata = {
  title: "abc",
  description: "Boost up your business!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
