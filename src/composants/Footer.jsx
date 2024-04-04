// Footer.jsx
import React from "react";
import { Button } from "@mui/material"; // Importez le bouton MUI selon vos besoins
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <p>
        <b>tâches actives</b>
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
