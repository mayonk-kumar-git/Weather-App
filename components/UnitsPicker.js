import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker({unitsSystem, setUnitsSystem}) {
  return (
    <View>
      <Picker selectedValue={unitsSystem} onValueChange={(item)=>setUnitsSystem(item)}>
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
}
