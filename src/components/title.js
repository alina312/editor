import React from "react";
import PropTypes from "prop-types";

class Title extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <input
        type="text"onChange={e => this.props.handleTitleChange(e)}
    />
    )
  }
}

Title.propTypes = {
  handleTitleChange: PropTypes.func.isRequired
}

export default Title;
