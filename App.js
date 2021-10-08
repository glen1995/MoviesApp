import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import AppStack from "./components/stacks/Appstack";
import { TabView } from "react-native-tab-view";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
};

export default App;
