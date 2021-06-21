import React from "react";
import MobileLayout from "./layout/mobile-layout";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MobileLayout />
    </Provider>
  );
};

export default App;

