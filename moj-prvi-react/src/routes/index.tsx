import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import JosJednaKomponenta from "../components/JosJednaKomponenta";
import DemoFlowOfData from "../components/DemoFlowOfData";
import UseEffectDemo from "../components/UseEffectDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/demonstracijaTokaPodataka",
    element: <DemoFlowOfData />,
  },
  {
    path: "/useEffectDemo",
    element: <UseEffectDemo />,
  },
  {
    path: "/nasaKomponenta",
    element: <JosJednaKomponenta />,
  },
]);

export default router;