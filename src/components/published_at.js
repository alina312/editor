import React from "react";
import PropTypes from "prop-types";

class Published_at extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <input
        type="date" onChange={e => this.props.handlePublished_atChange(e)}
    />
    )
  }
}

Published_at.propTypes = {
  handlePublished_atChange: PropTypes.func.isRequired
}

export default Published_at;
