import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import UserContainer1 from "./components/UserContainer1";

function App() {
  return (
    <Provider store={store}>
      <div className="container text-center">
        <div className="card card-body">
          <CakeContainer /> <hr />
          <HooksCakeContainer /> <hr />
          <IceCreamContainer /> <hr />
          <NewCakeContainer />
          <hr />
          <ItemContainer cake />
          <ItemContainer />
          <hr />
          <UserContainer />
          <hr />
          <UserContainer1 />
        </div>
      </div>
    </Provider>
  );
}

export default App;
