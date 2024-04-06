import React from 'react';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { motion } from 'framer-motion';
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
          <motion.li
            key={tache.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
            className="tache-item"
          >
            <AssignmentTurnedInIcon color="primary" variant="contained" onClick={() => basculerEtatTache(tache.id)}>
              {tache.complet ? 'Incompléter' : 'Compléter'}
            </AssignmentTurnedInIcon>
            <span style={{ color: tache.complet ? 'green' : 'black' }}>
              {tache.texte} - {tache.date} {tache.heure}
            </span>
            <DeleteForeverIcon color="error" variant="contained" onClick={() => supprimerTache(tache.id)}>
              Supprimer
            </DeleteForeverIcon>
          </motion.li>
        ))
      )}
    </ul>
  );
}

export default ListeDesTaches;
