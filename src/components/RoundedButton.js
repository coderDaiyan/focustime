import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../utils/color";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles(size).radius, style]}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "white",
      borderWidth: 2,
    },
    text: {
      color: colors.white,
      fontSize: size / 5,
      padding: 7,
    },
  });
