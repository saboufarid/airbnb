import React, { Component } from "react";
import { FlatList } from "react-native";
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
    data: null
  };

  renderRoom = room => {
    console.log(room);
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

    return (
      <Room
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
  };

  render() {
    const { bgWhite, flex1, p40 } = commonStyles;
    const { data } = this.state;

    if (data && data.rooms) {
      return (
        <FlatList
          style={[bgWhite, flex1, p40]}
          data={data.rooms}
          renderItem={({ item }) => this.renderRoom(item)}
          keyExtractor={(room, index) => room._id}
        />
      );
    } else {
      return null;
    }
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
