import { StyleSheet } from "react-native";

export default StyleSheet.create({
  white: {
    color: "white"
  },
  red: {
    color: "red"
  },
  pink: {
    color: "#FF5862"
  },
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
  row: {
    flexDirection: "row"
  },
  flex1: {
    flex: 1
  },
  bgGreen: {
    backgroundColor: "green"
  },
  mb5: {
    marginBottom: 5
  },
  mr5: {
    marginRight: 5
  },
  mb10: {
    marginBottom: 10
  },
  p5: {
    padding: 5
  },
  bold: {
    fontWeight: "bold"
  },
  rounded22: {
    borderRadius: 22
  },
  rounded10: {
    borderRadius: 10
  },
  rounded5: {
    borderRadius: 5
  },
  cover: {
    resizeMode: "cover"
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
  textCenter: {
    textAlign: "center"
  },
  mv20: {
    marginVertical: 20
  },
  pv10: {
    paddingVertical: 10
  },
  ph40: {
    paddingHorizontal: 40
  },
  h44: {
    // Taille minimum conseillée pour un boutton, un textinput
    height: 44
  },
  borderBottomBlack: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  borderBottomWhite: {
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  w100: {
    width: "100%"
  },
  fs40: {
    fontSize: 40
  },
  fs20: {
    fontSize: 20
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
