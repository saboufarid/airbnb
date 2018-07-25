import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import commonStyles from "../styles/commonStyles";
import axios from "axios";
import Room from "../components/Room";

class Home extends Component {
  static navigationOptions = {
    title: "MonAirbnb",
    headerStyle: {
      backgroundColor: "#FF5862"
    },
    headerTintColor: "white"
  };

  state = {
    data: ""
  };

  renderRooms = () => {
    let components = [];
    const { data } = this.state;
    if (data.rooms) {
      for (let room of data.rooms) {
        let { _id, title, photos, user, ratingValue, price, reviews } = room;
        let roomPhotoUri = "";
        if (photos && photos.length) {
          roomPhotoUri = photos[0];
        }
        let profilePhotoUri = "";
        if (
          user &&
          user.account &&
          user.account.photos &&
          user.account.photos.length
        ) {
          profilePhotoUri = user.account.photos[0];
        }
        components.push(
          <Room
            key={_id}
            id={_id}
            title={title}
            ratingValue={ratingValue}
            price={price}
            reviews={reviews}
            roomPhotoUri={roomPhotoUri}
            profilePhotoUri={profilePhotoUri}
            navigate={this.props.navigation.navigate}
          />
        );
      }
    }
    return components;
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
      borderBottom,
      w100,
      transparent,
      p40
    } = commonStyles;

    const { image, mb20, mb40 } = styles;

    return (
      <ScrollView style={[flex1, bgWhite, p40]}>
        {this.renderRooms()}
      </ScrollView>
    );
  }

  componentDidMount() {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        if (response.data) {
          this.setState({
            data: response.data
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Home;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80
  },
  mb20: {
    marginBottom: 20
  },
  mb40: {
    marginBottom: 40
  }
});
