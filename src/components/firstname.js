import React from "react";
import PropTypes from "prop-types";

class FirstName extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <input
        type="text" onChange={e => this.props.handleNameChange(e)}
    />
    )
  }
}

FirstName.propTypes = {
  handleFirstNameChange: PropTypes.func.isRequired
}

export default FirstName;