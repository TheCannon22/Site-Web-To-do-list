// Footer.jsx
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./Footer.scss";

function Footer({ taches, setTaches, setFiltre }) {
  const [tachesActives, setTachesActives] = useState(0);

  useEffect(() => {
    const tachesActivesCount = taches.filter(tache => !tache.complet).length;
    setTachesActives(tachesActivesCount);
  }, [taches]);

  const filtrerTaches = filtre => {
    setFiltre(filtre);
  };

  const supprimerTachesCompletes = () => {
    const nouvellesTaches = taches.filter(tache => !tache.complet);
    setTaches(nouvellesTaches);
    localStorage.setItem('taches', JSON.stringify(nouvellesTaches));
  };

  return (
    <div className="Footer">
      <p>
        <b>{tachesActives} tâches actives</b>
      </p>
      <div className="boutons-footer">
        <Button
          size="small"
          variant="contained"
          disableElevation
          color="success"
          onClick={() => filtrerTaches('toutes')}
        >
          Toutes
        </Button>
        <Button
          size="small"
          variant="contained"
          disableElevation
          color="success"
          onClick={() => filtrerTaches('completes')}
        >
          Complétées
        </Button>
        <Button
          size="small"
          variant="contained"
          disableElevation
          color="success"
          onClick={() => filtrerTaches('actives')}
        >
          Actives
        </Button>
      </div>
      <div className="supprimer">
        <Button
          color="error"
          variant="contained"
          onClick={supprimerTachesCompletes}
        >
          Supprimer Complétées
        </Button>
      </div>
    </div>
  );
}

export default Footer;
