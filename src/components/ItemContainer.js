import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux/index";

function ItemContainer(props) {
  return (
    <div>
      <h2>Number of Items : {props.item}</h2>
      <button className="btn btn-primary btn-sm" onClick={props.buyItem}>
        Buy Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;

  return {
    item: itemState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
