import styled from "styled-components/native";
import { Colors } from "./colors";
/**
 * This file is used to define the styles for the components
 */

export namespace Components {
  /**
   * Wrapper for the main container
   */
  export const Container = styled.View`
    padding: 24px;
  `;

  /**
   * Primary button
   */
  export const PrimaryButton = styled.TouchableOpacity`
    padding: 16px;
    background-color: ${Colors.SECONDARY};
    border-radius: 100px;
    align-items: center;
  `;
  export const SecondaryButton = styled.TouchableOpacity`
    padding: 16px;
    background-color: white;
    border-radius: 100px;
    align-items: center;
  `;
}
