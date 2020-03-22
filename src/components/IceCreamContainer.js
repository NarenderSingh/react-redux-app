import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

function IceCreamContainer(props) {
  return (
    <div>
      <h3>Number of IceCream - {props.numberOfIceCreams}</h3>
      <button className="btn btn-primary btn-sm" onClick={props.buyIceCream}>
        Buy IceCream
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
