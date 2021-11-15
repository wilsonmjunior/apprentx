import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack"

import { Home } from "../screens/Home"
import { CarDetails } from "../screens/CarDetails"

type RouteListParams = {
  Home: undefined
  CarDetails: undefined
}

export type RouteScreenProps = NativeStackNavigationProp<RouteListParams>;

const Stack = createNativeStackNavigator<RouteListParams>()

export function AppRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="CarDetails"
        component={CarDetails}
      />
    </Stack.Navigator>
  )
}