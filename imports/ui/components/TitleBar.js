import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component{
  renderSlogan() {
    const {slogan} = this.props;
    if (slogan) {
      return <h2>{slogan}</h2>;
    }
  }

render(){
      const {title} = this.props;
    return (

        <div className="title-bar">
            <div className="wrapper">
              <h1>{title}</h1>
                  <h2 className="title-bar__slogan">{this.renderSlogan(this.props.slogan)}</h2>
                </div>
        </div>
    );
}
};

// Add these 3 lines
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string
}

TitleBar.defaultProps = {
  title: 'Score Keep'
};

export default TitleBar;