import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer(props) {
  return (
    <div>
      <button className="btn btn-primary btn-sm" onClick={props.fetchUsers}>
        Get List of Users
      </button>
      <h4>List of Users</h4>
      <ul className="list-group">
        {props.users.map((d, i) => (
          <li className="list-group-item" key={i}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.user.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
