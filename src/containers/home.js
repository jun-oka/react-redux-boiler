import React from 'react';
import {connect} from 'react-redux';


class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Index route!</p>
      </div>
    )
  }
}

export default connect()(Home);