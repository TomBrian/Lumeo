import React from "react";
import { ScrollView, View } from "react-native";
import { Animations } from "../../animations/FadeInUp";
import { Typography } from "../../styles/typography";
import DropShadow from "react-native-drop-shadow";
import { OptionCard } from "../GetStarted";

export default function CreditScore() {
  const [selectedScore, setSelectedScore] = React.useState("Excellent (720+)");
  return (
    <View style={{ flex: 1 }}>
      <Animations.FadeInUp>
        <Typography.H5 style={{ color: "black" }}>
          Select your target loan amount. (usd)
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
                setSelectedScore("Excellent (720+)");
              }}
              selected={selectedScore === "Excellent (720+)"}
            >
              <Typography.P>Excellent (720+)</Typography.P>
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
                setSelectedScore("Good (660 - 719)");
              }}
              selected={selectedScore === "Good (660 - 719)"}
            >
              <Typography.P>Good (660 - 719)</Typography.P>
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
                setSelectedScore("Average (620-659)");
              }}
              selected={selectedScore === "Average (620-659)"}
            >
              <Typography.P>Average (620-659)</Typography.P>
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
                setSelectedScore("Below Average (580-619)");
              }}
              selected={selectedScore === "Below Average (580-619)"}
            >
              <Typography.P>Below Average (580-619)</Typography.P>
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
                setSelectedScore("Poor (≤ 580)");
              }}
              selected={selectedScore === "Poor (≤ 580)"}
            >
              <Typography.P>Poor (≤ 580)</Typography.P>
            </OptionCard>
          </DropShadow>
        </ScrollView>
      </Animations.FadeInUp>
    </View>
  );
}
