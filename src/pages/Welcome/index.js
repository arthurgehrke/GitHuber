import React, { Component } from "react";
import api from "../../services/api";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from "react-native";

import styles from "./styles";

export default class Welcome extends Component {
  state = {
    username: "",
    loading: false //Para aparecer o loading no botão
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
    const { navigation } = this.props; //pega o navigation das props

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate("Repositories");
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const { username, loading, error } = this.state;
    //método obrigatório dentro de um componente
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para você continuar precisamos que você informe seu usuário no GitHub
        </Text>

        {error && <Text style={styles.error}>Usuário Inexistente</Text>}

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
            {loading ? ( // Se houver o loading, o botão será a animação, se não o texto de prosseguir
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
