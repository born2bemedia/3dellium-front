import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const helvetica = localFont({
  src: [
    {
      path: "./fonts/Helvetica-light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-helvetica",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeue-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeue-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeue-Thin.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeue-Thin.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeue-Thin.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-helvetica-neue",
});

export const metadata = {
  title: "3Dellium",
  description: "",
};

console.log(helvetica.variable);
console.log(helveticaNeue.variable);

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${helvetica.variable} ${helveticaNeue.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/**<SmoothScroll /> */}
      </body>
    </html>
  );
}
