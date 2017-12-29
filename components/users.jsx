import React from "react";
import UserHeader from "./user-header";
import OrderNumber from "./order-number";
import Nine from "./nine";
import ListItem from "./list-item";
import Bottom from "./bottom";

class Users extends React.Component {
  render() {
    return (
      <div className='user-info'>
        <UserHeader/>
        <OrderNumber/>
        <ListItem/>
        <Nine/>
        <Bottom/>
      </div>
    );
  };
}

module.exports = Users;