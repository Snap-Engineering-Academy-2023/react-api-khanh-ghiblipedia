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
import GhibliCard from "./GhibliCard";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import Select from "@mui/material/Select";

function GhibliPage() {
  // var requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  // };

  // fetch("https://ghibliapi.vercel.app/films", requestOptions)
  //   .then((response) => response.json())
  //   //.then((result) => console.log(result))
  //   .then((response) => sortDates(response))

  //   .catch((error) => console.log("error", error));

  const [twoThousands, setTwoThousands] = useState([]);
  const [nineties, setNineties] = useState([]);
  const [eighties, setEighties] = useState([]);

  function addTwoThousands(movie) {
    twoThousands.push(movie);
    setTwoThousands(twoThousands);
  }

  function addNineties(movie) {
    nineties.push(movie);
    setNineties(nineties);
  }

  function addEighties(movie) {
    eighties.push(movie);
    setEighties(eighties);
  }

  function sortMovies(movies) {
    movies.map((elem) => {
      if (elem.release_date >= 2000) {
        addTwoThousands(elem);
      } else if (elem.release_date >= 1990) {
        addNineties(elem);
      } else if (elem.release_date >= 1980) {
        addEighties(elem);
      }
    });
  }

  async function clickedSortByDate() {
    const response = await fetch(
      "https://ghibliapi.vercel.app/films",
      requestOption
    );
    const data = await response.json();
    sortMovies(data);
    console.log(data);
  }

  const handleChange = (event) => {
    console.log(event);

    clickedSortByDate();
    {
      eighties.map((movie) => {
        return <GhibliCard engTitle={movie.title}> </GhibliCard>;
      });
    }
  };

  return (
    <div>
      <TextField label="Search for a movie"></TextField>
      <FormControl>
        <InputLabel>input label</InputLabel>
        <Select onChange={handleChange} label="Search">
          <MenuItem>Sort by Year</MenuItem>
          <MenuItem>hi</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default GhibliPage;
