import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {

  render() {
const {title,players,slogan}= this.props
    return (
      <div>
        <TitleBar title={title} slogan={slogan}/>
		<div className="wrapper">
			<PlayerList players={players} />
	        <AddPlayer />
		</div>

      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
  slogan:PropTypes.string
};

export default App;