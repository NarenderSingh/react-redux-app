import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number of Cakes - {state.numberOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  );
}

export default HooksCakeContainer;
