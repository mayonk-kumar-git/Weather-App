import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../utils/index";

export default function WeatherDetails() {
  return (
    <View style={styles.weatherDetails}>
      <Text>Mayonk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: colors.BORDER_COLOR,
    borderRadius: 10,
  },
});
