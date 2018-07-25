import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import commonStyles from "../styles/commonStyles";

const Rating = props => {
  let { row, alignItemsCenter, mr5 } = commonStyles;
  let { image } = styles;

  let { ratingValue, reviews } = props;
  let imageSource = require("../images/1_star.png");
  switch (ratingValue) {
    case 1:
      imageSource = require("../images/1_star.png");
      break;
    case 2:
      imageSource = require("../images/2_stars.png");
      break;
    case 3:
      imageSource = require("../images/3_stars.png");
      break;
    case 4:
      imageSource = require("../images/4_stars.png");
      break;
    case 5:
      imageSource = require("../images/5_stars.png");
      break;
    default:
      break;
  }
  return (
    <View style={[row, alignItemsCenter]}>
      <Image style={[image, mr5]} source={imageSource} />
      <Text style={[mr5]}>{reviews}</Text>
      <Text>reviews</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 40
  }
});
