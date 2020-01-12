import React, { Component } from "react";

import { View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../../components/Header";

const Organizations = () => (
  <View>
    <Header title="Organizações" />
  </View>
);

//Propriedade estática que o rn busca algumas configurações específicas
Organizations.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="building" size={20} color={tintColor} />
  )
};

export default Organizations;
