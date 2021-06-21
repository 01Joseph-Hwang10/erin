import React from "react";
import { View, StyleSheet } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Editor from "../pages/editor";
import Friends from "../pages/friends";
import MyPage from "../pages/my-page";
import Postbox from "../pages/postbox";
import Viewer from "../pages/viewer";
import { ROUTES } from "../src/constants";


const MobileLayout: React.FC = () => {
  return (
    <Router>
      <View style={styles.root}>
        <Scene key={ROUTES.EDITOR} component={Editor} hideNavBar hideTabBar />
        <Scene key={ROUTES.VIEWER} component={Viewer} hideNavBar hideTabBar />
        <Scene key='main'>
          <View style={styles.main}>
            <View style={styles.header}>
              <Header />
            </View>
            <View style={styles.content}>
              <Scene key={ROUTES.POSTBOX} initial={true} component={Postbox} />
              <Scene key={ROUTES.FRIENDS} component={Friends} />
              <Scene key={ROUTES.MY_PAGE} component={MyPage} />
            </View>
            <View style={styles.navigation}>
              <Navigation />
            </View>
          </View>
        </Scene>
      </View>
    </Router>
  );
};

export default React.memo(MobileLayout);

const HEADER_HEIGHT = 8;
const NAVIGATION_HEIGHT = 12;
const CONTENT_HEIGHT = 100 - HEADER_HEIGHT - NAVIGATION_HEIGHT;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%"
  },
  main: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: `${HEADER_HEIGHT}%`
  },
  navigation: {
    width: "100%",
    height: `${NAVIGATION_HEIGHT}%`,
  },
  content: {
    width: "100%",
    height: `${CONTENT_HEIGHT}%`
  }
});
