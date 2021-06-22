import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Postbox from "../pages/postbox";
import Friends from "../pages/friends";
import MyPage from "../pages/my-page";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { StackParamList } from "./mobile-layout";
import { useNavigationState } from "@react-navigation/native";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();

type MainScreenNavigationProp = StackNavigationProp<
    StackParamList,
    "main"
>

type MainScreenRouteProp = RouteProp<
    StackParamList,
    "main"
>

interface MainProps {
    navigation: MainScreenNavigationProp,
    route: MainScreenRouteProp
}

const Main: React.FC<MainProps> = ({
  navigation
}) => {

  const state = useNavigationState(state => state.routes[0].state);
  useEffect(() => {
    if (state?.routeNames && typeof state.index === "number") {
      const routeName = state?.routeNames[state.index];
      const capitalizedName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
      navigation.setOptions({ 
        title: capitalizedName
      });
    }
  }, [state]);

  return (
    <Tab.Navigator initialRouteName="postbox">
      <Tab.Screen name="friends" component={Friends} />
      <Tab.Screen name="postbox" component={Postbox} />
      <Tab.Screen name="myPage" component={MyPage} />
    </Tab.Navigator>
  );
};

export default Main;
