import "@fontsource/roboto";
import "./App.css";
import Header from "/src/Pages/Header.jsx";
import Banner from "./Pages/Banner";
import ContentCards from "./Pages/ContentCards";
import DistribuicoesLinux from "./Pages/DistribuicoesLinux";
import Footer from "./Pages/Footer";
import LinkInstalacao from "./Pages/LinkInstalacao";
import Contato from "./Pages/Contato";


export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <ContentCards />
        <DistribuicoesLinux />
        <LinkInstalacao />
        <Contato />
        <Footer />
      </main>
    </div>
  );
}
