import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import createNavigator from "./src/routes";

export default class App extends Component {
  state = {
    userChecked: false, //Verifica-se se a informação do login estava no async storage, vira true alguma hora (em que se verifica)
    userLogged: false // Verficia se a EXISTE está no async storage, vira true apenas se a informação estiver no asyncStorage
  };
  async componentDidMount() {
    const username = await AsyncStorage.getItem("@Githuber:username");

    this.setState({
      userChecked: true, //Verificou-se a existencia ou não do user,
      userLogged: !!username //Verifica se existe o username, com o !! inverte-se o valor booleano, passando assim para true, se não existir, continua falso
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null; //Se userchecked estiver falso, retorna-se null, se estiver true, renderiza-se as rotas

    const Routes = createNavigator(userLogged);
    return <Routes />;
  }
}
