import { StackNavigator } from "react-navigation";
import Login from "./src/containers/Login";
import Home from "./src/containers/Home";
import Room from "./src/containers/RoomDetail";

const App = StackNavigator({
  HomeScreen: {
    screen: Home
  },
  RoomScreen: {
    screen: Room
  },
  LoginScreen: {
    screen: Login
  }
});

export default App;
