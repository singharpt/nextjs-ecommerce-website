import "@/styles/globals.css";
import { MyUserContext } from "../components/context/context_provider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyUserContext>
        <Component {...pageProps} />
      </MyUserContext>
    </>
  );
}
