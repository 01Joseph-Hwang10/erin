import React from "react";
import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { setScreenSpec, SetScreenSpecInput } from "../redux/slices/screen";
import MobileLayout from "./mobile-layout";

type LayoutWrapperReduxProps = ConnectedProps<typeof connector>

interface LayoutWrapperProps extends LayoutWrapperReduxProps {}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  setScreenSpec: SetScreenSpec
}) => {

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    SetScreenSpec({ width, height });
  }, []);

  return <MobileLayout />;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setScreenSpec: (payload: SetScreenSpecInput) => dispatch(setScreenSpec(payload))
  };
};

const connector = connect(null, mapDispatchToProps);

// export default React.memo(connector(LayoutWrapper));
export default connector(LayoutWrapper);
