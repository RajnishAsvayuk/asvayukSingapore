import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Asvayuk Technologies | Best Web Designing & Web Developmnet Company",
  description:
    "GAsvayuk Technologies best Web design and Development Company Chandigarh. Asvayuk Technologies Provide Web design & development. Asvayuk Technologies SEO and Digital Marketing Service provider.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>{children}</body>
    </html>
  );
}
