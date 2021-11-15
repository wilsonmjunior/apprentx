import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { AppRoute } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  )
}
