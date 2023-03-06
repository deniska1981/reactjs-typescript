import { useContext, useState } from "react";
import { Provider } from "react-redux"; 

import { ColorContext } from "./context/ColorContext";
import { ThemeContext } from "./context/ThemeContext";

import './App.css'
import Dijete from "./components/Dijete";
import { store } from "./store/store";


function App() {
  const [theme, setTheme] = useState<number>(225);
  const colorLightness = useContext(ColorContext);


  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <div className="App" style={{backgroundColor: `hsl(${theme} 100% ${colorLightness}%)`}}>
          <ColorContext.Provider value={colorLightness + 20}>
            Dobar dan, ja Sam App!
            <h1>Promijeni temu stranice upisivajući broj od 0 do 255</h1>
            <input type="number" min="0" max="255" onChange={(e)=>setTheme(parseInt(e.target.value))} value={theme}/>
            <Dijete/>
          </ColorContext.Provider>
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;