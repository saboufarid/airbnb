import { StackNavigator } from "react-navigation";
import Login from "./src/containers/Login";
import Home from "./src/containers/Home";

const App = StackNavigator({
  LoginScreen: {
    screen: Login
  },
  HomeScreen: {
    screen: Home
  }
});

export default App;
