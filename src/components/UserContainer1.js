import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer1({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h4>Loading</h4>
  ) : userData.error ? (
    <h4> {userData.error}</h4>
  ) : (
    <div>
      <h4>User List</h4>
      <div>
        {userData.users.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer1);
