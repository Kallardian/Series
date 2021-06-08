import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/pages/LoginScreen";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Bem Vindo!",
        headerTitleStyle: {
          color: "white",
          fontSize: 30,
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      title: "Minhas Séries!",
      headerStyle: {
        backgroundColor: "#ed4242",
        borderBottomWidth: 1,
        borderBottomColor: "#c0c0c0",
      },
      headerTitleStyle: {
        fontSize: 30,
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
