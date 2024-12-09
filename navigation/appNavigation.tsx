import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "@/screens/HomeScreen";
import OnboardingSceen from "@/screens/OnboardingSceen";




const Stack = createNativeStackNavigator();

export default function appNavigation() {
    return(
      <>
        <Stack.Navigator initialRouteName="Onboarding">
            <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingSceen}/>
            <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
        </Stack.Navigator>
      </>
    )
}

