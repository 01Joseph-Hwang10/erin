import React from "react";
import { BackHandler, Alert } from "react-native";
import Editor from "../pages/editor";
import Viewer from "../pages/viewer";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./main";
import { voidFunction } from "../src/constants";


export type StackParamList = {
  main: undefined,
  editor: undefined,
  viewer: undefined
}

const Stack = createStackNavigator<StackParamList>();

const MobileLayout: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='main'>
        <Stack.Screen 
          name="main"
          component={Main}
        />
        <Stack.Screen 
          name='editor'
          component={Editor}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='viewer'
          component={Viewer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default React.memo(MobileLayout);
export default MobileLayout;

// const HEADER_HEIGHT = 8;
// const NAVIGATION_HEIGHT = 12;
// const CONTENT_HEIGHT = 100 - HEADER_HEIGHT - NAVIGATION_HEIGHT;

// const styles = StyleSheet.create({
//   root: {
//     width: "100%",
//     height: "100%"
//   },
//   main: {
//     flex: 1,
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   header: {
//     width: "100%",
//     height: `${HEADER_HEIGHT}%`
//   },
//   navigation: {
//     width: "100%",
//     height: `${NAVIGATION_HEIGHT}%`,
//   },
//   content: {
//     width: "100%",
//     height: `${CONTENT_HEIGHT}%`
//   }
// });
