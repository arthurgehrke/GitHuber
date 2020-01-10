import React, { Component } from "react";
import { withNavigation } from "react-navigation"; //Não como usar o navigate, pois o componente header não está nas rotas
import PropTypes from "prop-types"; //yarn add prop-types

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome"; // yarn add react-native-vector-icons e react-native link react-native-vector-icons
// Usa-se essa biblioteca para utilizar icones, pode-se usar várias como a fontAwasome
import styles from "./styles";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };
  signOut = async () => {
    const { navigation } = this.props; //Apenas consegue se usar o navigation aqui, pelo withNavigation, já que o Header não está entre as rotas

    await AsyncStorage.clear();

    navigation.navigate("Welcome");
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header); //Utiliza-se dessa forma para poder navegar para outra rota, já que o componente header não está entre as rotas
