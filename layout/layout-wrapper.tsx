import React from "react";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { setScreenSpec, SetScreenSpecInput } from "../redux/slices/screen";
import MobileLayout from "./mobile-layout";
import { WIDTH_CONSTANT, MARGIN_CONSTANT } from "../components/editor/base/constants";
import { configureIconLayout, ConfigureIconLayoutInput } from "../redux/slices/editor";

type LayoutWrapperReduxProps = ConnectedProps<typeof connector>

interface LayoutWrapperProps extends LayoutWrapperReduxProps {}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  setScreenSpec: SetScreenSpec,
  configureIconLayout: ConfigureIconLayout
}) => {

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    SetScreenSpec({ width, height });
    ConfigureIconLayout({
      iconSize: width * WIDTH_CONSTANT,
      iconGap: width * MARGIN_CONSTANT
    });
  }, []);

  return <MobileLayout />;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setScreenSpec: (payload: SetScreenSpecInput) => dispatch(setScreenSpec(payload)),
    configureIconLayout: (payload: ConfigureIconLayoutInput) => dispatch(configureIconLayout(payload))
  };
};

const connector = connect(null, mapDispatchToProps);

// export default React.memo(connector(LayoutWrapper));
export default connector(LayoutWrapper);
