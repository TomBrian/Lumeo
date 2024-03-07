import React from "react";
import { View } from "react-native";
import { Animations } from "../../animations/FadeInUp";
import { Typography } from "../../styles/typography";
import DropShadow from "react-native-drop-shadow";
import { OptionCard } from "../GetStarted";

export default function LoanAmount() {
  const [selectedAmount, setSelectedAmount] = React.useState("Under 200k");
  return (
    <View style={{ flex: 1 }}>
      <Animations.FadeInUp>
        <Typography.H5 style={{ color: "black" }}>
          Select your target loan amount. (usd)
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
              setSelectedAmount("Under 200k");
            }}
            selected={selectedAmount === "Under 200k"}
          >
            <Typography.P>Under 200k</Typography.P>
          </OptionCard>
        </DropShadow>
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
              setSelectedAmount("200k - 300k");
            }}
            selected={selectedAmount === "200k - 300k"}
          >
            <Typography.P>200k - 300k</Typography.P>
          </OptionCard>
        </DropShadow>
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
              setSelectedAmount("300k - 450k");
            }}
            selected={selectedAmount === "300k - 450k"}
          >
            <Typography.P>300k - 450k</Typography.P>
          </OptionCard>
        </DropShadow>

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
              setSelectedAmount("450k+");
            }}
            selected={selectedAmount === "450k+"}
          >
            <Typography.P>450k+</Typography.P>
          </OptionCard>
        </DropShadow>
      </Animations.FadeInUp>
    </View>
  );
}
