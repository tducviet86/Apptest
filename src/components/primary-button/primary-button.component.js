import { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./primary-button.styles";

function PrimaryButton(props) {
  const { children, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {typeof children === "string" ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

export default PrimaryButton;
