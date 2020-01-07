import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import styles from "./styles";

const Welcome = () => (
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
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
