import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from "@/components/layouts/homelayout/HomeLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Asvayuk Technologies | Best Web Designing & Web Development Company",
  description:
    "Asvayuk Technologies - Best Web Design and Development Company in Chandigarh. Providing Web Design, Development, SEO, and Digital Marketing Services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
