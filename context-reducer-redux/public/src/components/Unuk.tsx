import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import { ThemeContext } from "../context/ThemeContext";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { izbaciPrviFilm, addMovie } from "../store/slices/MoviesSlice";

const Unuk = () => {
  const movies = useAppSelector((state) => state.movies);
  const colorLightness = useContext(ColorContext);
  const theme = useContext(ThemeContext);

  const dispatch = useAppDispatch();

  return (
    <div style={{ backgroundColor: `hsl(${theme} 100% ${colorLightness}%)` }}>
      <h3>Ovo trenutno imamo u centralnom skladištu stanja, slice movies</h3>
      {movies.status === "idle" ? (
        <>
          <ul>
            {movies.results.map((clan, index) => (
              <li key={index}>{clan}</li>
            ))}
          </ul>
          <button onClick={() => dispatch(izbaciPrviFilm())}>
            Izbaci prvog
          </button>
          <button onClick={() => dispatch(addMovie("dozvola za brak"))}>
            Dodaj "dozvola za brak"
          </button>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Unuk;
