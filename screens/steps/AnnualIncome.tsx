import React from "react";
import { ScrollView, View } from "react-native";
import { Animations } from "../../animations/FadeInUp";
import { Typography } from "../../styles/typography";
import DropShadow from "react-native-drop-shadow";
import { OptionCard } from "../GetStarted";

export default function AnnualIncome() {
  const [selectedAmount, setSelectedAmount] = React.useState("Under 25k");
  return (
    <View style={{ flex: 1 }}>
      <Animations.FadeInUp>
        <Typography.H5 style={{ color: "black" }}>
          Your Estimated Annual Income (usd)
        </Typography.H5>
        <ScrollView style={{ maxHeight: 480 }}>
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
                setSelectedAmount("Under 25k");
              }}
              selected={selectedAmount === "Under 25k"}
            >
              <Typography.P>Under 25k</Typography.P>
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
                setSelectedAmount("25k-50k");
              }}
              selected={selectedAmount === "25k-50k"}
            >
              <Typography.P>25k-50k</Typography.P>
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
                setSelectedAmount("50k-80k");
              }}
              selected={selectedAmount === "50k-80k"}
            >
              <Typography.P>50k-80k</Typography.P>
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
                setSelectedAmount("80k+");
              }}
              selected={selectedAmount === "80k+"}
            >
              <Typography.P>80k+</Typography.P>
            </OptionCard>
          </DropShadow>
        </ScrollView>
      </Animations.FadeInUp>
    </View>
  );
}
