// Footer.jsx
import React from 'react';
import { Button } from '@mui/material'; // Importez le bouton MUI selon vos besoins
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <p>
        <b>tâches actives</b>
      </p>
      <div className="boutons-footer">
        <button>Toutes</button>
        <button>Complétés</button>
        <button>Actives</button>
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
