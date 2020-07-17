import React from "react";

function Profiles(props) {
  // console.log(props)
  return (
    <div className="profile-card">
      <div className="card-body">
        <img src={props.img} />
        <h2> Name: {props.name} </h2>
        <h2> Email: {props.email} </h2>
        <h2> Mobile: {props.mobile} </h2>
      </div>
    </div>
  );
}

export default Profiles;
