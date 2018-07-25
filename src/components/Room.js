import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import commonStyles from "../styles/commonStyles";
import Rating from "./Rating";

class Room extends Component {
  state = {
    imageWidth: 0,
    imageHeight: 0
  };

  componentDidMount() {
    if (this.props.roomPhotoUri) {
      // To get image proportion
      Image.getSize(this.props.roomPhotoUri, (width, height) => {
        let proportion = height / width;
        let imageWidth = Dimensions.get("window").width - 2 * 40;
        let imageHeight = Math.ceil(imageWidth * proportion);
        this.setState({ imageWidth, imageHeight });
      });
    }
  }

  render() {
    const {
      row,
      flex1,
      mb10,
      mv20,
      fs40,
      bgBlack,
      white,
      opacity8,
      borderBottomBlack,
      w100
    } = commonStyles;
    const {
      title,
      price,
      ratingValue,
      reviews,
      roomPhotoUri,
      profilePhotoUri
    } = this.props;

    const { imageProfile, priceStyle, fs16 } = styles;
    const { imageWidth, imageHeight } = this.state;

    return (
      <View style={[]}>
        <View style={[mv20]}>
          <View>
            <Image
              style={[{ width: imageWidth, height: imageHeight }, mb10]}
              source={{ uri: roomPhotoUri }}
            />
            <Text style={[priceStyle, fs40, bgBlack, white, opacity8]}>
              {price} €
            </Text>
          </View>
          <View style={[row]}>
            <View style={flex1}>
              <Text style={[fs16]} numberOfLines={1}>
                {title}
              </Text>
              <Rating ratingValue={ratingValue} reviews={reviews} />
            </View>
            <Image style={[imageProfile]} source={{ uri: profilePhotoUri }} />
          </View>
        </View>
        <View style={[borderBottomBlack, w100]} />
      </View>
    );
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
    position: "relative",
    width: 120,
    top: -80,
    marginBottom: -40
  }
});
