import React, { useRef } from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import "./InputDesTaches.scss";

function InputDesTaches({ setTaches }) {
  const inputRef = useRef();

  const ajouterTache = () => {
    const nouvelleTache = {
      id: uuidv4(),
      texte: inputRef.current.value,
      date: new Date().toLocaleDateString(),
      heure: new Date().toLocaleTimeString(),
      complet: false
    };
    const taches = JSON.parse(localStorage.getItem('taches')) || [];
    taches.push(nouvelleTache);
    localStorage.setItem('taches', JSON.stringify(taches));
    setTaches(taches); 
    inputRef.current.value = '';
  };

  return (
    <div className="Input-tache">
      <div className="barre-tache">
        <TextField fullWidth label="Nouvelle tâche" variant="outlined" inputRef={inputRef} />
      </div>
      <Button color="success" variant="contained" onClick={ajouterTache}>
        Ajouter
      </Button>
    </div>
  );
}

export default InputDesTaches;
