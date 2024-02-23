/* eslint-disable react-native/no-inline-styles */

import { SvgElements } from "../components/SvgElements";
import { Colors } from "../styles/colors";
import { Components } from "../styles/components";
import { StatusBar, Text, View } from "react-native";

import { Typography } from "../styles/typography";

export default function WelcomeScreen() {
  return (
    <Components.Container
      style={{
        height: "100%",
        backgroundColor: Colors.SECONDARY,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 0,
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%" }}>
        <SvgElements.LumeoIcon />
        <Typography.H2 style={{ color: "white", marginTop: 24 }}>
          Empowering Dreams, One{" "}
          <Text style={{ color: Colors.PRIMARY }}>Mortgage</Text> at a Time.
        </Typography.H2>
      </View>

      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          borderRadius: 500,
          width: 1000,
          height: 1000,
          paddingTop: 100,
          alignItems: "center",
        }}
      >
        <View style={{ width: 310 }}>
          <Typography.P>
            <Text style={{ fontWeight: "bold" }}>Swift Approval</Text> - Get
            your mortgage application processed and approved in record time.{" "}
          </Typography.P>
          <Typography.P style={{ marginTop: 24 }}>
            <Text style={{ fontWeight: "bold" }}>Secure Vault Mortgage</Text> -
            Utmost security and privacy in every transaction.
          </Typography.P>
          <Components.PrimaryButton style={{ marginTop: 32 }}>
            <Typography.P style={{ color: "white" }}>Get Started</Typography.P>
          </Components.PrimaryButton>
          <Components.SecondaryButton style={{ marginTop: 16 }}>
            <Typography.P style={{ color: Colors.SECONDARY }}>
              Sign In
            </Typography.P>
          </Components.SecondaryButton>
        </View>
      </View>
    </Components.Container>
  );
}
