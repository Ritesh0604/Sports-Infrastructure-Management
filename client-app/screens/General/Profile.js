import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Login from "./Login";
import Signup from "./Signup";
import Main from "../Athelte/Main";
import SportComplexDetails from "./SportComplexDetail";
const Profile = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GeneralComplexDetails"
          component={SportComplexDetails}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Profile;
