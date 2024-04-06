// Footer.jsx
import React from "react";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import "./Footer.scss";

function Footer() {
  const [tachesActives, setTachesActives] = useState(0);

  useEffect(() => {
    const taches = JSON.parse(localStorage.getItem('taches')) || [];
    const tachesActives = taches.filter(tache => !tache.complet).length;
    setTachesActives(tachesActives);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const taches = JSON.parse(localStorage.getItem('taches')) || [];
      const tachesActives = taches.filter(tache => !tache.complet).length;
      setTachesActives(tachesActives);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  return (
    <div className="Footer">
      <p>
        <b> {tachesActives} tâches actives</b>
      </p>
      <div className="boutons-footer">
        <Button
          size="small"
          variant="contained"
          disableElevation
          color="success"
        >
          Toutes
        </Button>
        <Button
          size="small"
          variant="contained"
          disableElevation
          color="success"
        >
          Complétés
        </Button>
        <Button
          size="small"
          variant="contained"
          disableElevation
          color="success"
        >
          Actives
        </Button>
      </div>
      <div className="supprimer">
        <Button color="error" variant="contained">
          Supprimer Complétées
        </Button>
      </div>
    </div>
  );
}

export default Footer;
