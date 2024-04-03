import "./Appli.scss";
import Header from "./Header";
import InputDesTaches from "./InputDesTaches";
import ListeDesTaches from "./ListeDesTaches";
import Footer from "./Footer";

function Appli() {
  return (
    <div className="Appli">
      <Header />
      <main className="Contenu">
        <InputDesTaches />
        <ListeDesTaches />
      </main>
      <Footer />
    </div>
  );
}

export default Appli;
