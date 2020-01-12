import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";

import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../../components/Header";

import RepositoryItem from "./RepositoryItem";
import styles from "./styles";

const TabIcon = ({ tintColor }) => (
  <Icon name="list-alt" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    data: [],
    loading: true
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@Githuber:username");
    const { data } = await api.get(`/users/${username}/repos`);

    this.setState({ data, loading: false });
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { data } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)} //no github, cada repositório tem um id, então a key será por ele
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
