import React from "react";
import { TextField, Button } from "@mui/material";
import "./InputDesTaches.scss";

function InputDesTaches() {
  return (
    <div className="Input-tache">
      <div className="barre-tache">
        <TextField fullWidth label="Nouvelle tâche" variant="outlined" />
      </div>
      <Button color="success" variant="contained">
        Ajouter
      </Button>
    </div>
  );
}

export default InputDesTaches;
