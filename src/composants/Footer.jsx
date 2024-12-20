import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./Footer.scss";
import { motion } from "framer-motion";

function Footer({ taches, setTaches, setFiltre }) {
  const [tachesActives, setTachesActives] = useState(0);
  const [filtreActif, setFiltreActif] = useState("toutes");

  useEffect(() => {
    const nombreDeTachesActives = taches.filter(
      (tache) => !tache.complet
    ).length;
    setTachesActives(nombreDeTachesActives);
  }, [taches]);

  const filtrerTaches = (filtre) => {
    setFiltre(filtre);
    setFiltreActif(filtre);
  };

  const supprimerTachesCompletes = () => {
    const nouvellesTaches = taches.filter((tache) => !tache.complet);
    setTaches(nouvellesTaches);
    localStorage.setItem("taches", JSON.stringify(nouvellesTaches));
  };

  return (
    <div className="Footer">
      <p>
        <b>{tachesActives} tâches actives</b>
      </p>
      <div className="boutons-footer">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Button
          size="medium"
          variant="contained"
          disableElevation
          color={filtreActif === "toutes" ? "info" : "success"}
          onClick={() => filtrerTaches("toutes")}
        >
          Toutes
        </Button>
        </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Button
          size="medium"
          variant="contained"
          disableElevation
          color={filtreActif === "completes" ? "info" : "success"}
          onClick={() => filtrerTaches("completes")}
        >
          Complétées
        </Button>
        </motion.div>
        <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Button
          size="medium"
          variant="contained"
          disableElevation
          color={filtreActif === "actives" ? "info" : "success"}
          onClick={() => filtrerTaches("actives")}
        >
          Actives
        </Button>
        </motion.div>
      </div>
      <div className="supprimer">
        <Button
          size="large"
          color="warning"
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
