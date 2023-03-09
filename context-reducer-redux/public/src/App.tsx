import { FormEvent, useContext, useState } from "react";
import { Provider } from "react-redux";

import { ColorContext } from "./context/ColorContext";
import { ThemeContext } from "./context/ThemeContext";

import "./App.css";
import Dijete from "./components/Dijete";
import { store } from "./store/store";

type CountriesProbabilities = {
  country: { [key: string]: string }[];
  name: string;
};

function App() {
  const [fallbackMessage, setFallbackMessage] = useState("Nema Podataka");
  const [vjerojatnosti, setVjerojatnosti] =
    useState<null | CountriesProbabilities>(null);
  const [ime, setIme] = useState("");
  const [theme, setTheme] = useState<number>(225);
  const colorLightness = useContext(ColorContext);

  const fetchData = async (name: string) => {
    const response = await fetch(`https://api.nationalize.io?name=${name}`);
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFallbackMessage("Ucitajem podatke");

    const newState = await fetchData(ime);

    setVjerojatnosti(newState);

    setFallbackMessage("Nema podataka");
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <div
          className="App"
          style={{ backgroundColor: `hsl(${theme} 100% ${colorLightness}%)` }}
        >
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
            <h3>Prikaz rezultata za {ime}:</h3>

            {vjerojatnosti ? (
              <ol>
                {" "}
                {vjerojatnosti.country.map((clan, index) => (
                  <li key={index}>
                    {clan.country_id} -{" "}
                    {(parseFloat(clan.probability) * 100).toFixed(2)} %
                  </li>
                ))}
              </ol>
            ) : (
              <p>{fallbackMessage}</p>
            )}
          </div>
          <ColorContext.Provider value={colorLightness + 20}>
            Dobar dan, ja Sam App!
            <h1>Promijeni temu stranice upisivajući broj od 0 do 255</h1>
            <input
              type="number"
              min="0"
              max="255"
              onChange={(e) => setTheme(parseInt(e.target.value))}
              value={theme}
            />
            <Dijete />
          </ColorContext.Provider>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
