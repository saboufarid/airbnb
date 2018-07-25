import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";
import commonStyles from "../styles/commonStyles";
import Rating from "../components/Rating";
import axios from "axios";

class Room extends Component {
  static navigationOptions = {
    title: "Room",
    headerStyle: {
      backgroundColor: "#FF5862"
    },
    headerTintColor: "white"
  };

  state = {
    loading: true,
    title: "",
    description: "",
    ratingValue: 0,
    price: 0,
    reviews: 0,
    roomPhotoUri: "",
    profilePhotoUri: "",
    imageWidth: 0,
    imageHeight: 0
  };

  componentDidMount() {
    const id = this.props.navigation.state.params.id;
    axios
      .get(`https://airbnb-api.now.sh/api/room/${id}`)
      .then(response => {
        if (response.data) {
          let {
            title,
            description,
            photos,
            user,
            ratingValue,
            price,
            reviews
          } = response.data;
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
          let imageWidth = 0;
          let imageHeight = 0;
          if (roomPhotoUri) {
            // To get image proportion
            Image.getSize(roomPhotoUri, (width, height) => {
              let proportion = height / width;
              imageWidth = Dimensions.get("window").width;
              imageHeight = Math.ceil(imageWidth * proportion);
              this.setState({ imageWidth, imageHeight });
            });
          }

          this.setState({
            title,
            description,
            ratingValue,
            price,
            reviews,
            roomPhotoUri,
            profilePhotoUri,
            roomPhotoUri,
            profilePhotoUri,
            loading: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
      row,
      flex1,
      mb10,
      fs40,
      bgBlack,
      white,
      opacity8,
      p20,
      justifyContentCenter
    } = commonStyles;
    const {
      title,
      description,
      price,
      ratingValue,
      reviews,
      roomPhotoUri,
      profilePhotoUri,
      imageWidth,
      imageHeight,
      loading
    } = this.state;

    const { imageProfile, priceStyle, fs16 } = styles;

    if (loading) {
      return (
        <ActivityIndicator
          style={[flex1, justifyContentCenter]}
          size="large"
          color="#FF5862"
        />
      );
    } else {
      return (
        <View>
          <View>
            <Image
              style={[{ width: imageWidth, height: imageHeight }, mb10]}
              source={{ uri: roomPhotoUri }}
            />
            <Text style={[priceStyle, fs40, bgBlack, white, opacity8]}>
              {price} €
            </Text>
          </View>
          <View style={[p20]}>
            <View style={[row, mb10]}>
              <View style={flex1}>
                <Text style={[fs16]} numberOfLines={1}>
                  {title}
                </Text>
                <Rating ratingValue={ratingValue} reviews={reviews} />
              </View>
              <Image style={[imageProfile]} source={{ uri: profilePhotoUri }} />
            </View>
            <Text style={[fs16]} numberOfLines={3}>
              {description}
            </Text>
          </View>
        </View>
      );
    }
  }
}

export default Room;

const styles = StyleSheet.create({
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  fs16: {
    fontSize: 16
  },
  priceStyle: {
    position: "absolute",
    width: 120,
    bottom: 30
  }
});
