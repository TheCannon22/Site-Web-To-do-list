import React from 'react';
import { TextField, Button } from '@mui/material';
import './InputDesTaches.scss';

function InputDesTaches() {
  return (
    <div className="Input-tache">
      <TextField label="Nouvelle tâche" variant="outlined" />
      <Button variant="contained">Ajouter</Button>
    </div>
  );
}

export default InputDesTaches;
