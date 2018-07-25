import React from "react";
import axios from "axios";

import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Animated,
  Keyboard
} from "react-native";

class LogIn extends React.Component {
  static navigationOptions = {
    title: "LogIn",
    headerStyle: { display: "none" }
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "arno@airbnb-api.com",
      password: "password01"
    };
    this.imageHeight = new Animated.Value(250);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 100
    }).start();
  };

  keyboardWillHide = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 250
    }).start();
  };

  handlePress = () => {
    axios
      .post("https://airbnb-api.now.sh/api/user/log_in", this.state)
      .then(response => {
        const token = response.data.token;
        this.props.navigation.navigate("Home", { token: token });
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert("Incorrect credentials");
        }
        console.log(err);
      });
  };

  render() {
    let standardHeight = this.imageHeight;
    return (
      <KeyboardAvoidingView
        style={{
          alignItems: "center",
          justiyContent: "center",
          backgroundColor: "#FC5C63",
          flex: 1
        }}
        behavior="padding"
      >
        {/* <Image
          source={require("../images/logo.png")}
          style={{ height: 120, width: 120, marginTop: 60 }}
        /> */}
        <Animated.Image
          source={require("../images/logo.png")}
          style={[
            {
              height: standardHeight,
              width: standardHeight,
              marginTop: 10
            }
          ]}
        />
        <Text
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: "200",
            marginBottom: 20
          }}
        >
          Welcome
        </Text>
        <TextInput
          ref={c => (this.email = c)}
          returnKeyType={"next"}
          style={{
            height: 55,
            width: "75%",
            borderBottomColor: "white",
            borderBottomWidth: 1,
            color: "white",
            paddingTop: 10,
            paddingHorizontal: 10,
            paddingBottom: 5,
            fontSize: 25,
            marginBottom: 10
          }}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          autoCapitalize="none"
          placeholder="email"
          onSubmitEditing={() => this.password.focus()}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          ref={c => (this.password = c)}
          style={{
            height: 55,
            width: "75%",
            borderBottomColor: "white",
            borderBottomWidth: 1,
            color: "white",
            paddingTop: 10,
            paddingHorizontal: 10,
            paddingBottom: 5,
            fontSize: 25,
            marginBottom: 20
          }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={this.handlePress}
          style={{
            backgroundColor: "white",
            borderRadius: 25,
            width: 150,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15
          }}
        >
          <View>
            <Text
              style={{
                color: "#FC5C63",
                fontSize: 25,
                fontWeight: "400"
              }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>

        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    );
  }
}

export default LogIn;
