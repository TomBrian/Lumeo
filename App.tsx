/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from "./providers/ThemeProvider";

import { StatusBar } from "react-native";
import AnimationsScreen from "./screens/AnimationsScreen";

export default function App() {
  return (
    // @ts-ignore
    <ThemeProvider>
      <StatusBar translucent backgroundColor="transparent" />
      <AnimationsScreen />
    </ThemeProvider>
  );
}
