import React from "react";
import { Components } from "../styles/components";
import { Typography } from "../styles/typography";

export default function GetStarted() {
  return (
    <Components.Container>
      <Components.PrimaryButton>
        <Typography.P style={{ color: "white" }}>Next</Typography.P>
      </Components.PrimaryButton>
      <Components.SecondaryButton>
        <Typography.P style={{ color: "white" }}>Back</Typography.P>
      </Components.SecondaryButton>
    </Components.Container>
  );
}
