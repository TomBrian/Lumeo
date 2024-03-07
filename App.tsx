/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from "./providers/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import GetStarted from "./screens/GetStarted";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      {/* @ts-ignore */}
      <ThemeProvider>
        <StatusBar translucent backgroundColor="transparent" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Welcome"
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
