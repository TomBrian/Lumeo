import React from "react";
import { Components } from "../styles/components";
import { Typography } from "../styles/typography";
import { StatusBar, View } from "react-native";
import { Colors } from "../styles/colors";
import AppHeader from "../components/AppHeader";
import FormSteps from "../components/FormSteps";
import styled from "styled-components/native";
import MortgageType from "./steps/MortgageType";
import LoanAmount from "./steps/LoanAmount";
import CreditScore from "./steps/CreditScore";
import AnnualIncome from "./steps/AnnualIncome";
import QuoteLoader from "./steps/QuoteLoader";

export default function GetStarted() {
  const [currentStep, setCurrentStep] = React.useState(1);
  return currentStep === 5 ? (
    <QuoteLoader />
  ) : (
    <Components.Container
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <AppHeader />
      <FormSteps step={currentStep} stepsLength={5} />
      {currentStep === 1 && <MortgageType />}
      {currentStep === 2 && <LoanAmount />}
      {currentStep === 3 && <CreditScore />}
      {currentStep === 4 && <AnnualIncome />}

      <View style={{ width: "100%" }}>
        <Components.PrimaryButton
          onPress={() => {
            setCurrentStep(currentStep + 1);
          }}
        >
          <Typography.P style={{ color: "white", fontWeight: "bold" }}>
            Next
          </Typography.P>
        </Components.PrimaryButton>
        <Components.SecondaryButton>
          <Typography.P
            onPress={() => setCurrentStep(currentStep - 1)}
            style={{ color: Colors.SECONDARY, fontWeight: "bold" }}
          >
            Back
          </Typography.P>
        </Components.SecondaryButton>
      </View>
    </Components.Container>
  );
}

export const OptionCard = styled.TouchableOpacity`
  padding: 16px;
  border-color: ${(props: any) => (props.selected ? Colors.PRIMARY : "white")};
  border-width: 2px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 16px;
  justify-content: center;
  elevation: 4;
`;
