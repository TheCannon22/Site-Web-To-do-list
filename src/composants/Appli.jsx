import React, { useState, useEffect } from 'react';
import "./Appli.scss";
import Header from "./Header";
import InputDesTaches from "./InputDesTaches";
import ListeDesTaches from "./ListeDesTaches";
import Footer from "./Footer";
import Connexion from "./Connexion";

function Appli() {
  const [taches, setTaches] = useState([]);
  const [filtre, setFiltre] = useState('toutes');

  useEffect(() => {
    const tachesLocalStorage = localStorage.getItem('taches');
    if (tachesLocalStorage) {
      setTaches(JSON.parse(tachesLocalStorage));
    }
  }, []);

  return (
    <div className="Appli">
      <Connexion />
      <Header />
      <main className="Contenu">
        <InputDesTaches setTaches={setTaches} />
        <ListeDesTaches taches={taches} setTaches={setTaches} filtre={filtre} />
      </main>
      <Footer taches={taches} setTaches={setTaches} setFiltre={setFiltre} />
    </div>
  );
}

export default Appli;
