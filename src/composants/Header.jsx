import React from "react";
import AlbumIcon from '@mui/icons-material/Album';
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <AlbumIcon className="icone-message" fontSize="large">
        Forum
      </AlbumIcon>
    </header>
  );
}

export default Header;
