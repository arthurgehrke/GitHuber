import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";
import { getStatusBarHeight } from "react-native-status-bar-height"; //Função para pegar a altura da status bar do cel

const styles = StyleSheet.create({
  container: {
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darker
  },
  icon: {
    color: colors.darker
  }
});

export default styles;

//yarn add react-native-status-bar-height para alterar o tamanho da barra de status, cada versão de celular tem um tamanho diferente
