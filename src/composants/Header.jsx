import React from 'react';
import ForumIcon from "@mui/icons-material/Forum";
import './Header.scss';

function Header() {
  return (
    <header className="Header">
      <ForumIcon className="icone-message">Forum</ForumIcon>
    </header>
  );
}

export default Header;