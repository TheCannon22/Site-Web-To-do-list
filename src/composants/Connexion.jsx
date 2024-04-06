import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Connexion.scss';

function Connexion() {
  return (
    <header className="Connexion">
      <div className="contenu-au-milieu">
        <h2>Site web fait par Alexander Rankov et Gabrielle Pelletier</h2>
      </div>
      <div className="bouton-login">
        <button className="bouton-connexion">
          <Avatar />
          <span className="texte-button">Connexion</span>
        </button>
      </div>
    </header>
  );
};

export default Connexion;
