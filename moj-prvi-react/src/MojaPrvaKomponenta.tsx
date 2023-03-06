import { useEffect } from "react";

function MojaPrvaKomponenta(){
    useEffect(()=>{console.log("bok Antune")});
    return (<div>
        <h1>Moja prva komponenta</h1>
    </div>)
};

export default MojaPrvaKomponenta;