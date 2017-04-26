import React, { Component } from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

class PlayerList extends React.Component {

  renderPlayers() {
const {players} =this.props;

if (this.props.players.length === 0 ) {
  return (
	<div className="item">
	  <p className="item__message item__message--empty">Please add some players.</p>
	</div>
  );
} else {
  return this.props.players.map( player => {
	return <Player key={player._id} player={player} />;
    });
  }

  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
        {this.renderPlayers()}
      </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayerList;