import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* Color */
  white: {
    color: "white"
  },
  red: {
    color: "red"
  },
  pink: {
    color: "#FF5862"
  },
  /* Background color */

  bgPink: {
    backgroundColor: "#FF5862"
  },
  bgRed: {
    backgroundColor: "red"
  },
  bgWhite: {
    backgroundColor: "white"
  },
  bgBlack: {
    backgroundColor: "black"
  },
  bgGreen: {
    backgroundColor: "green"
  },
  /* Flex */
  row: {
    flexDirection: "row"
  },
  flex1: {
    flex: 1
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  justifyContentCenter: {
    justifyContent: "center"
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  /* Margin */
  mb5: {
    marginBottom: 5
  },
  mr5: {
    marginRight: 5
  },
  mb10: {
    marginBottom: 10
  },
  mv20: {
    marginVertical: 20
  },
  /* Padding */
  p5: {
    padding: 5
  },
  p20: {
    padding: 20
  },
  p40: {
    padding: 40
  },
  pv10: {
    paddingVertical: 10
  },
  ph40: {
    paddingHorizontal: 40
  },
  /* Fonts */
  bold: {
    fontWeight: "bold"
  },
  fs40: {
    fontSize: 40
  },
  fs20: {
    fontSize: 20
  },
  /* Border */
  rounded22: {
    borderRadius: 22
  },
  rounded10: {
    borderRadius: 10
  },
  rounded5: {
    borderRadius: 5
  },
  borderBottomBlack: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  borderBottomWhite: {
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  /* Image */
  cover: {
    resizeMode: "cover"
  },
  /* Others */
  textCenter: {
    textAlign: "center"
  },
  h44: {
    // Button/TextInput recommended minimum size
    height: 44
  },
  w100: {
    width: "100%"
  },
  opacity8: {
    opacity: 0.8
  }
});

/* Copy this to the component where you want to use style

  import commonStyles from "../styles/commonStyles"

  const {
    white,
    bgPink,
    row,
    flex1,
    bgGreen,
    mb5,
    mb10,
    p5,
    bold,
    rounded10,
    rounded5,
    cover,
    spaceBetween,
    alignItemsCenter,
    textCenter,
    pv10,
    h44
  } = commonStyles;
*/
