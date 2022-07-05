import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./tab.navigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}