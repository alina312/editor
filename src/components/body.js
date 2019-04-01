import React from "react";
import PropTypes from "prop-types";

class Body extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <textarea
        rows="50"
        cols="50"
        onChange={e => this.props.handleBodyChange(e)}
    />
    )
  }
}

Body.propTypes = {
  handleBodyChange: PropTypes.func.isRequired
};
 export default Body;