import { StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation";
import Login from "./src/containers/Login";
import Stuff from "./src/containers/Stuff";
import Home from "./src/containers/Home";
import Room from "./src/containers/RoomDetail";

StatusBar.setBarStyle("light-content");
const App = createStackNavigator({
  LoginScreen: {
    screen: Login
  },
  HomeScreen: {
    screen: Home
  },
  RoomScreen: {
    screen: Room
  },
  StuffScreen: {
    screen: Stuff
  }
});

export default App;
