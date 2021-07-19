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
import { BackHandler } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { Dispatch } from "redux";
import { setCurrentPage, SetCurrentPageInput } from "../redux/slices/navigation";
import { setLoading, SetLoadingInput } from "../redux/slices/app-state";
import { capitalizer } from "./main.function";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

type MainScreenNavigationProp = StackNavigationProp<
    StackParamList,
    "main"
>

type MainScreenRouteProp = RouteProp<
    StackParamList,
    "main"
>

type MainReduxProps = ConnectedProps<typeof connector>

interface MainProps extends MainReduxProps {
    navigation: MainScreenNavigationProp,
    route: MainScreenRouteProp
}

const Main: React.FC<MainProps> = ({
  navigation,
  currentPage,
  setCurrentPage: SetCurrentPage,
  setLoading: SetLoading
}) => {
  
  const state = useNavigationState(state => state.routes[0].state);
  useEffect(() => {
    SetCurrentPage("postbox");
    SetLoading(false);
    let capitalizedName: string | undefined;
    if (
      typeof state?.index === "number" && 
      typeof state?.routeNames?.[state.index] === "string"
    ) {
      const routeName = state?.routeNames[state.index];
      SetCurrentPage(routeName);
      capitalizedName = capitalizer(routeName);
    }
    if (!capitalizedName) {
      capitalizedName = capitalizer(currentPage);
    }
    navigation.setOptions({ 
      title: capitalizedName
    });
    const backButtonHandler = () => {
      if ( Platform.OS === "android" ) {
        BackHandler.exitApp();
      }
      if (["main", "friends", "postbox", "myPage"].includes(currentPage)) {
        return true;
      } else {
        return false;
      }
    };
    if ( Platform.OS === "android" ) {
      BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
    }
    return () => {
      SetCurrentPage("not-main");
      if ( Platform.OS === "android" ) {
        BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
      }
    };
  }, [state]);

  return (
    <Tab.Navigator initialRouteName="postbox">
      <Tab.Screen name="friends" component={Friends} />
      <Tab.Screen name="postbox" component={Postbox} />
      <Tab.Screen name="myPage" component={MyPage} />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    currentPage: state.navigation.currentPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentPage: (payload: SetCurrentPageInput) => dispatch(setCurrentPage(payload)),
    setLoading: (payload: SetLoadingInput) => dispatch(setLoading(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

// export default React.memo(Main);
export default connector(Main);
