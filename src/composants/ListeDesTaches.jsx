import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './ListeDesTaches.scss';

function ListeDesTaches() {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    const tachesLocalStorage = localStorage.getItem('taches');
    if (tachesLocalStorage) {
      setTaches(JSON.parse(tachesLocalStorage));
    }
  }, []);

  const supprimerTache = (id) => {
    const nouvellesTaches = taches.filter(tache => tache.id !== id);
    setTaches(nouvellesTaches);
    localStorage.setItem('taches', JSON.stringify(nouvellesTaches));
  };

  const basculerEtatTache = (id) => {
    const nouvellesTaches = taches.map(tache => {
      if (tache.id === id) {
        return { ...tache, complet: !tache.complet };
      }
      return tache;
    });
    setTaches(nouvellesTaches);
    localStorage.setItem('taches', JSON.stringify(nouvellesTaches));
  };

  return (
    <ul className="Liste-des-taches">
      {taches.map((tache) => (
        <li key={tache.id} className="tache-item">
          <Button color="primary" variant="contained" onClick={() => basculerEtatTache(tache.id)}>
            {tache.complet ? 'Incompléter' : 'Compléter'}
          </Button>
          <span style={{ color: tache.complet ? 'green' : 'black' }}>
            {tache.texte} - {tache.date} {tache.heure}
          </span>
          <Button color="error" variant="contained" onClick={() => supprimerTache(tache.id)}>
            Supprimer
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default ListeDesTaches;