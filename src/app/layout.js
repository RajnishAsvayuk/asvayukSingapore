import { Geist } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLayout from "@/components/layouts/homelayout/HomeLayout";

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
      <body className={`${geistSans.variable}`}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
