/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Animated, StatusBar, View } from "react-native";
import { Components } from "../styles/components";
import { Typography } from "../styles/typography";
import { Colors } from "../styles/colors";

export default function AnimationsScreen() {
  const borderRadius = React.useRef(new Animated.Value(0)).current;

  function moveBall() {
    console.log("Molding ball", borderRadius);
    try {
      Animated.loop(
        Animated.sequence([
          Animated.timing(borderRadius, {
            toValue: 100,
            duration: 2000,
            useNativeDriver: false,
          }),
          Animated.timing(borderRadius, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false,
          }),
          Animated.timing(borderRadius, {
            toValue: 100,
            duration: 2000,
            useNativeDriver: false,
          }),
        ])
      ).start();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Components.Container
      style={{ paddingTop: StatusBar.currentHeight, flex: 1 }}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: Colors.PRIMARY,
            borderRadius,
            marginVertical: 24,
          }}
        />
      </View>
      <Components.PrimaryButton onPress={() => moveBall()}>
        <Typography.P style={{ color: "white" }}>Mold the ball</Typography.P>
      </Components.PrimaryButton>
    </Components.Container>
  );
}
