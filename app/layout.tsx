import { CartDesktop } from "./components/CartDesktop";
import { CartMobileIcon } from "./components/CartMobileIcon";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { Nav } from "./components/Nav";
import { CartContextProvider } from "./context/CartContext";
import { ToasterContext } from "./context/ToasterContext";
import { VisibleContextProvider } from "./context/isVisibleContext";
import "./globals.css";
import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "PizzaLand",
  description: "ePizza Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}
      >
        <CartContextProvider>
          <VisibleContextProvider>
            <ToasterContext />
            <Nav />
            <CartDesktop />
            <CartMobileIcon />
            {children}
            <Footer />
            <Modal />
          </VisibleContextProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
