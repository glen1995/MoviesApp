import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import IndexScreen from "../screens/IndexScreen";
import DetailsScreen from '../screens/DetailsScreen'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const AppStack = () => (
  <SafeAreaProvider>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{
          title: "Movies App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => (
          {title:route.params.label,
          headerBackTitle:"Back to list",headerBackTitleVisible:'true'}
        )}

      />
    </Stack.Navigator>
  </NavigationContainer>
  </SafeAreaProvider>
);

export default AppStack;
