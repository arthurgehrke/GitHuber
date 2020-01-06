import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); //retorna a altura e largura do celular

export default {
  baseMargin: 10, //margem
  basePadding: 20, //espaçamento interior(padding)
  baseRadius: 3, //borda arredondada
  screenWidth: width < height ? width : height, //para se verificar se o celular está "virado" ou "em pe"
  //Se a largura for menor que a altura(Significa que o celular está "em pé"), a largura da tela (screenwidth) será igual à largura do celular, se não será igual à altura
  screenHeight: width < height ? height : width //mesma lógica para a altura
};
