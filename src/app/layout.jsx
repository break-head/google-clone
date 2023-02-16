import Header from "./components/Header";
import "./globals.css";
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
        </Providers>
      </body>
    </html>
  );
}
