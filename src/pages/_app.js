import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
      <>
        <main className={poppins.className}>
          <Toaster position="top-right" reverseOrder={true} />
          <Header />
          <Component {...pageProps} />
          <Cookies />
          {router.pathname !== "/contact" &&
              router.pathname !== "/contact/demo" && <Footer />}
        </main>
      </>
  );
}
