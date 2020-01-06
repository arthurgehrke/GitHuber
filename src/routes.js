// Para navegar entre as rotas, se usa o react-navigation
//Deve-se instalar também o react-navigate-gesture-handler (Lida com as animações no react navigation)

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "./pages/Welcome";
import Repositories from "./pages/Repositories";

const Routes = createAppContainer(
  // o appContainer deve envolver o switchNavigator, que conterá os componentes de rotas
  createSwitchNavigator({
    Welcome, // há varios navigators
    Repositories // dentro, vão os componentes de paginas (rotas) que serão navegadas
  })
);

export default Routes;
