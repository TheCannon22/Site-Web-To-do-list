// ListeDesTaches.jsx
import React from 'react';
import { Button } from '@mui/material';
import './ListeDesTaches.scss';

function ListeDesTaches({ taches, setTaches, filtre }) {
  const supprimerTache = id => {
    const nouvellesTaches = taches.filter(tache => tache.id !== id);
    setTaches(nouvellesTaches);
    localStorage.setItem('taches', JSON.stringify(nouvellesTaches));
  };

  const basculerEtatTache = id => {
    const nouvellesTaches = taches.map(tache => {
      if (tache.id === id) {
        return { ...tache, complet: !tache.complet };
      }
      return tache;
    });
    setTaches(nouvellesTaches);
    localStorage.setItem('taches', JSON.stringify(nouvellesTaches));
  };

  const tachesFiltrees = taches.filter(tache => {
    if (filtre === 'toutes') return true;
    if (filtre === 'completes') return tache.complet;
    if (filtre === 'actives') return !tache.complet;
    return true;
  });

  return (
    <ul className="Liste-des-taches">
      {tachesFiltrees.length === 0 ? (
        <li>Vous n'avez aucune tâche à faire</li>
      ) : (
        tachesFiltrees.map(tache => (
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
        ))
      )}
    </ul>
  );
}

export default ListeDesTaches;
