import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="">
        <h2>Users Details</h2>
            <p>First Name: {this.props.userDetails.first}</p>
            <p>Last Name: {this.props.userDetails.last}</p>
            <p>age: {this.props.userDetails.age}</p>
            <p>Location: {this.props.userDetails.location}</p>
            <p>Description: {this.props.userDetails.description}</p>
      </div>
    );
  }
}

export default User;
