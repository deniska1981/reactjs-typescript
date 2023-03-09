import { useContext, useState } from "react";
import { ColorContext } from "../context/ColorContext";
import { ThemeContext } from "../context/ThemeContext";

import { useAppDispatch } from "../store/hooks";
import { fetchMovies } from "../store/slices/MoviesSlice";

import Unuk from "./Unuk";

const Dijete = () => {
  const [ime, setIme] = useState("");

  const colorLightness = useContext(ColorContext);
  const theme = useContext(ThemeContext);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(fetchMovies(ime));
  };

  return (
    <div style={{ backgroundColor: `hsl(${theme} 100% ${colorLightness}%)` }}>
      <ColorContext.Provider value={colorLightness + 20}>
        Dijete
        <div style={{ backgroundColor: "white" }}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>
              Unesi ime za kojeg želiš prvjeriti koje je nacionalnosti:
            </label>
            <input
              type="text"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
            ></input>
            <input type="submit" value="Provjeri"></input>
          </form>
        </div>
        <Unuk />
      </ColorContext.Provider>
    </div>
  );
};

export default Dijete;
