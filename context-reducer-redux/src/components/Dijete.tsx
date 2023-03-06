import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import { ThemeContext } from "../context/ThemeContext";

import Unuk from "./Unuk";


const Dijete = () => {
    const colorLightness = useContext(ColorContext);
    const theme = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: `hsl(${theme} 100% ${colorLightness}%)`}}>
        <ColorContext.Provider value={colorLightness + 20}>
            Dijete
            <Unuk/>
        </ColorContext.Provider>
    </div>
  )
}

export default Dijete