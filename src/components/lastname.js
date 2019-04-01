import React from "react";
import PropTypes from "prop-types";

class LastName extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <input
        type="text" onChange={e => this.props.handleLastNameChange(e)}
    />
    )
  }
}

LastName.propTypes = {
  handleLastNameChange: PropTypes.func.isRequired
}

export default LastName;
