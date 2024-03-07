import React from "react";
import { Animated, Easing } from "react-native";

const InfinitePulseAnimation: React.FC = ({
  children,
}: {
  children: ReactNode;
}) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    pulseAnimation.start();

    return () => {
      pulseAnimation.stop();
    };
  }, [scaleValue]);

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleValue }],
      }}
    >
      {children}
      {/* Your content here */}
    </Animated.View>
  );
};

export default InfinitePulseAnimation;
