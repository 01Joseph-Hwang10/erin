import React from "react";
import LayoutWrapper from "./layout/layout-wrapper";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LayoutWrapper />
    </Provider>
  );
};

export default App;

