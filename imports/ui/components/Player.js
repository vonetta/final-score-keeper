import React, { Component } from 'react';
import { Players } from './../../api/players';
import PropTypes from 'prop-types';

class Player extends Component {

  checkPoints(playerPoints) {
    return (playerPoints === 1 || playerPoints === -1) ? 'point' : 'points';
  }

  render() {
    const { player } = this.props;
    let itemClassName = `item item--position-${player.rank}`;

    return (
        <div key={player._id} className={itemClassName}>
          <div className="player">
            <div>
              <h3 className="player__name">{player.name}</h3>
              <p className="player__stats">
                {player.position} place - {player.score} {this.checkPoints(player.score)}.
              </p>
            </div>
            <div className="player__actions">
              <button className="button button--round" onClick={() => {
                Players.update( player._id, { $inc: { score: 1} } );
              }}>+1</button>
              <button className="button button--round" onClick={() => {
                Players.update( player._id, { $inc: { score: -1} } );
              }}>-1</button>
              <button className="button button--round" onClick={() =>  Players.remove(player._id)}>X</button>
            </div>
          </div>
        </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player;