import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export namespace Animations {
  /**
   * Creates a fade in up animation
   * @param param0
   * @returns
   */
  export const FadeInUp = ({ children }: any) => {
    const translateY = useRef(new Animated.Value(100)).current;

    useEffect(() => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300, // Adjust duration as needed
        useNativeDriver: true,
      }).start();
    }, [translateY]);

    return (
      <Animated.View
        style={{
          transform: [{ translateY }],
          opacity: translateY.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0],
            extrapolate: "clamp",
          }),
        }}
      >
        {children}
      </Animated.View>
    );
  };
}
