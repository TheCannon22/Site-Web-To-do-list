import React from "react";
import AlbumIcon from "@mui/icons-material/Album";
import AddTaskIcon from "@mui/icons-material/AddTask";
import "./Header.scss";

function Header() {
  return (
    <header className="Header">
      <AddTaskIcon className="icone" fontSize="large">
        TaskIcon
      </AddTaskIcon>
    </header>
  );
}

export default Header;
