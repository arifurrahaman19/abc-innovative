import "./globals.css";
import "aos/dist/aos.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

export const metadata = {
  title: "abc",
  description: "Boost up your business!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#172029]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
