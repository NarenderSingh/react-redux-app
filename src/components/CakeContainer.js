import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes : {props.numberOfCakes}</h2>
      <button className="btn btn-primary btn-sm" onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numberOfCakes: state.cake.numberOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
