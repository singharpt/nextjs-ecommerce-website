import "@/styles/globals.css";
import { MyUserContext } from "../components/context/context_provider";
import Footer from "../components/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyUserContext>
        <Component {...pageProps} />
        <Footer />
      </MyUserContext>
    </>
  );
}
