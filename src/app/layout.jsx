import Header from "./components/Header";
import "./globals.css";
import Head from "./head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head />
        <Header />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
