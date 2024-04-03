import "./Footer.scss";
import Button from "@mui/material/Button";

// Jouer avec flex-direction (order des éléments aussi pour les boutons)
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
