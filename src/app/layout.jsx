import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/globals.scss';
import Header from "./layout/header";
import Footer from "./layout/footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.fontFmaily}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
