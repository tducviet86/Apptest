import { LinearGradient } from "expo-linear-gradient";
import { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./float-button.styles";
function FloatButton(props) {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={["#F76707", "#FD8822"]}
        style={styles.linearContainer}
      >
        <Ionicons name="add" size={40} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default FloatButton;
