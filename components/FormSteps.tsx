import React from "react";
import { View } from "react-native";
import { Colors } from "../styles/colors";

export default function FormSteps({ step, stepsLength }: any) {
  const bars = [];
  for (let index = 0; index < stepsLength; index++) {
    bars.push(index);
  }

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginBottom: 24,
        height: 64,
        alignItems: "center",
      }}
    >
      {/* @ts-ignore */}
      {bars.map((bar, index) => {
        return (
          <View
            key={index}
            style={{
              flex: 1,
              backgroundColor: index < step ? Colors.PRIMARY : null,
              marginRight: 24,
              height: 10,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: Colors.PRIMARY,
            }}
          />
        );
      })}
    </View>
  );
}
