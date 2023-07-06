import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CharacterCard from "./CharacterCard";
import characters from "./protagonists.json";
import { useState } from "react";

function App({ engTitle }) {
  // state variable to store the click count!
  const [count, setCounter] = useState(0);

  return (
    <div>
      <Typography>{engTitle}</Typography>
    </div>
  );
}

export default App;
