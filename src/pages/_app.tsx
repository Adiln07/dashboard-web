import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Kanit } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from "react";
// import { initBackendUrl } from "@/services/AxiosConfig";

// prevent duplicate CSS

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   initBackendUrl();
  // }, []);
  return (
    <main className={kanit.className}>
      <Component {...pageProps} />
    </main>
  );
}
