import React, { useEffect, useState } from 'react';
import './ListeDesTaches.scss';

function ListeDesTaches() {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    const tachesLocalStorage = localStorage.getItem('taches');
    if (tachesLocalStorage) {
      setTaches(JSON.parse(tachesLocalStorage));
    }
  }, []);

  return (
    <ul className="Liste-des-taches">
      {taches.map((tache) => (
        <li key={tache.id} className="tache-item">
          {tache.texte} - {tache.date} {tache.heure} - {tache.complet ? 'Complétée' : 'Active'}
        </li>
      ))}
    </ul>
  );
}

export default ListeDesTaches;
