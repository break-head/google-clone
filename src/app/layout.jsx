import Footer from "./components/Footer";
import "./globals.css";
import Header from "./components/Header";
import Head from "./head";
import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <Head />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
