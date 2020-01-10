// Para navegar entre as rotas, se usa o react-navigation
//Deve-se instalar também o react-navigate-gesture-handler (Lida com as animações no react navigation)

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "./pages/Welcome";
import Repositories from "./pages/Repositories";

//Transformou-se em uma função, para se receber o userlogged e se definir qual sera a rota inicial
const Routes = (userLogged = false) =>
  createAppContainer(
    // o appContainer deve envolver o switchNavigator, que conterá os componentes de rotas
    createSwitchNavigator(
      {
        Welcome, // há varios navigators
        Repositories // dentro, vão os componentes de paginas (rotas) que serão navegadas
      },
      {
        initialRouteName: userLogged ? "Repositories" : "Welcome" //Se ele já tiver o usuário armazenado no local storage, pular a pagina de login
      }
    )
  );

export default Routes;
