import React, { Component } from "react";
import { connect } from "react-redux";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Notes</th>
            </tr>
            {this.props.users && this.props.users.map((item, index) => (
              <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.notes}</td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.data,
  };
}

export default connect(mapStateToProps)(Table);
