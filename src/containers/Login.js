import React, { Component, Fragment } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard
} from "react-native";
import commonStyles from "../styles/commonStyles";
import axios from "axios";
import Icon from "react-native-animated-icons";

class Login extends Component {
  static navigationOptions = {
    headerStyle: { display: "none" }
  };

  state = {
    email: "arno@airbnb-api.com",
    password: "password01",
    iconSize: 80,
    error: "",
    loading: false
  };

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener("keyboardWillShow", () =>
      this.setState({
        iconSize: 40
      })
    );
    this.keyboardWillHideSub = Keyboard.addListener("keyboardWillHide", () =>
      this.setState({
        iconSize: 80
      })
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

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

    this.setState(
      {
        loading: true
      },
      () => {
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
            this.setState(
              {
                loading: false
              },
              () => {
                if (response.data) {
                  navigate("HomeScreen");
                }
              }
            );
          })
          .catch(err => {
            this.setState({
              loading: false,
              error: err.message
            });
          });
      }
    );
  };

  renderButtonContent() {
    const { pink, fs20, bold, mr5 } = commonStyles;
    if (this.state.loading) {
      return (
        <Fragment>
          <Text style={[pink, fs20, bold, mr5]}>Login</Text>
          <ActivityIndicator size="small" color="#FF5862" />
        </Fragment>
      );
    }
    return <Text style={[pink, fs20, bold]}>Login</Text>;
  }

  render() {
    const {
      white,
      red,
      bgPink,
      bgWhite,
      flex1,
      bold,
      rounded22,
      alignItemsCenter,
      justifyContentCenter,
      textCenter,
      ph40,
      fs20,
      fs40,
      h44,
      borderBottomWhite,
      w100,
      p40,
      row,
      mb40,
      mb20
    } = commonStyles;

    const { error, loading, iconSize } = this.state;

    return (
      <KeyboardAvoidingView
        style={[
          flex1,
          bgPink,
          p40,
          alignItemsCenter,
          justifyContentCenter,
          mb20
        ]}
        behavior="padding"
      >
        <Icon
          name="home"
          fontFamily="Ionicons"
          fontSize={iconSize}
          animation
          color="white"
        />

        <Text style={[white, fs40, mb40]}>Welcome</Text>
        <TextInput
          returnKeyType={"next"}
          placeholder={"email"}
          keyboardType={"email-address"}
          style={[w100, h44, fs20, borderBottomWhite, mb40, white]}
          value={this.state.email}
          onChangeText={text => this.onChange("email", text)}
        />
        <TextInput
          returnKeyType={"next"}
          placeholder={"password"}
          secureTextEntry={true}
          style={[w100, h44, fs20, borderBottomWhite, mb20, white]}
          value={this.state.password}
          onChangeText={text => this.onChange("password", text)}
        />
        <Text
          style={[red, error ? bgWhite : bgPink, bold, w100, textCenter, mb20]}
        >
          {error}
        </Text>
        <TouchableOpacity
          style={[
            row,
            bgWhite,
            h44,
            rounded22,
            justifyContentCenter,
            alignItemsCenter,
            mb40,
            ph40
          ]}
          disabled={loading}
          onPress={this.onLogin}
        >
          {this.renderButtonContent()}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
