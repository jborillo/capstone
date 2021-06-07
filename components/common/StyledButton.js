import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const StyledButton = (props) => {
  return (
    <TouchableOpacity {...props} style={[props.style, styles.button] }>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};
//mic
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default StyledButton;
