import React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgElements } from "../components/SvgElements";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AppHeader() {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row", height: 64, alignItems: "center" }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
          <Path
            d="M21 18.418C18.5535 15.4315 16.381 13.737 14.482 13.334C12.5835 12.9315 10.776 12.8705 9.059 13.1515V18.5L1 9.7725L9.059 1.5V6.5835C12.2335 6.6085 14.932 7.7475 17.155 10C19.3775 12.2525 20.6595 15.0585 21 18.418Z"
            stroke="#1E1E1E"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </Svg>
      </Pressable>
      <View style={{ width: 24, height: "100%" }} />
      <SvgElements.FullLogo />
    </View>
  );
}
