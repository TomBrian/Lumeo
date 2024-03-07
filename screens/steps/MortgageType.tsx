import React from "react";
import { View } from "react-native";
import { Animations } from "../../animations/FadeInUp";
import { Typography } from "../../styles/typography";
import DropShadow from "react-native-drop-shadow";
import { OptionCard } from "../GetStarted";

export default function MortgageType() {
  const [mortgageType, setMortgageType] = React.useState("Refinancing");
  return (
    <View style={{ flex: 1 }}>
      <Animations.FadeInUp>
        <Typography.H5 style={{ color: "black" }}>
          Select the type of mortgage you need.{" "}
        </Typography.H5>
        <DropShadow
          style={{
            marginTop: 24,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.01,
            shadowRadius: 4,
          }}
        >
          <OptionCard
            onPress={() => {
              setMortgageType("Refinancing");
            }}
            selected={mortgageType === "Refinancing"}
          >
            <Typography.P>Refinancing</Typography.P>
          </OptionCard>
        </DropShadow>
        <DropShadow
          style={{
            marginTop: 4,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.01,
            shadowRadius: 4,
          }}
        >
          <OptionCard
            onPress={() => {
              setMortgageType("Buy");
            }}
            selected={mortgageType === "Buy"}
          >
            <Typography.P>Buy A Home</Typography.P>
          </OptionCard>
        </DropShadow>
      </Animations.FadeInUp>
    </View>
  );
}
