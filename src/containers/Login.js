import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import commonStyles from "../styles/commonStyles";
import axios from "axios";

class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FF5862"
    }
  };

  state = {
    email: "",
    password: "",
    error: ""
  };

  onChange = (key, value) => {
    this.setState({
      [key]: value // key est considéré comme une variable afin de modifier le state `name` ou `password`
    });
  };

  onLogin = () => {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    axios
      .post(
        "https://airbnb-api.now.sh/api/user/log_in/",
        {
          email,
          password
        },
        config
      )
      .then(response => {
        console.log(response.data);
        if (response.data) {
          navigate("HomeScreen");
        }
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };

  render() {
    const {
      white,
      pink,
      red,
      bgPink,
      bgWhite,
      row,
      flex1,
      bgGreen,
      mb5,
      mb10,
      p5,
      bold,
      rounded22,
      rounded10,
      rounded5,
      cover,
      spaceBetween,
      alignItemsCenter,
      justifyContentCenter,
      textCenter,
      pv10,
      ph40,
      fs20,
      fs40,
      h44,
      borderBottomWhite,
      w100,
      transparent
    } = commonStyles;

    const { image, p40, mb20, mb40 } = styles;
    const { error } = this.state;

    return (
      <View style={[flex1, bgPink, p40, alignItemsCenter]}>
        <Image style={[image, mb20]} source={require("../images/house.png")} />
        <Text style={[white, fs40, mb20]}>Welcome</Text>
        <TextInput
          returnKeyType={"next"}
          placeholder={"email"}
          keyboardType={"email-address"}
          style={[w100, h44, fs20, borderBottomWhite, mb20, white]}
          value={this.state.name}
          onChangeText={text => this.onChange("email", text)}
        />
        <TextInput
          returnKeyType={"next"}
          placeholder={"password"}
          secureTextEntry={true}
          style={[w100, h44, fs20, borderBottomWhite, mb40, white]}
          value={this.state.password}
          onChangeText={text => this.onChange("password", text)}
        />
        <TouchableOpacity
          style={[bgWhite, h44, rounded22, justifyContentCenter, mb40]}
          onPress={this.onLogin}
        >
          <Text style={[pink, fs20, bold, ph40]}>Login</Text>
        </TouchableOpacity>

        <Text style={[red, error ? bgWhite : bgPink, bold, w100, textCenter]}>
          {error}
        </Text>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80
  },
  p40: {
    padding: 40
  },
  mb20: {
    marginBottom: 20
  },
  mb40: {
    marginBottom: 40
  }
});
