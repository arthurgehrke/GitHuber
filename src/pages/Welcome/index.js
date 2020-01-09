import React, { Component } from "react";
import api from "../../services/api";

import AsyncStorage from "@react-native-community/async-storage";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import styles from "./styles";

export default class Welcome extends Component {
  state = {
    username: ""
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem("@Githuber:username", username);
  };

  signIn = async () => {
    const { username } = this.state;

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
    } catch (err) {
      console.log("Usuário Inexistente");
    }
  };

  render() {
    const { username } = this.state;
    //método obrigatório dentro de um componente
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para você continuar precisamos que você informe seu usuário no GitHub
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none" //Para não colocar letra maiúscula no começo automaticamente
            autoCorrect={false} //Para não corrigir automaticamente
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent" //Para colocar a linha em baixo da letra no android como transp.
            value={username}
            onChangeText={text => this.setState({ username: text })}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
