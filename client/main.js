import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

const checkPoints = (playerPoints) => {
  return (playerPoints === 1 || playerPoints === -1) ? 'point' : 'points';
}

const renderPlayers = playersList => {
   return playersList.map( player => {
     return (
       <p key={player._id}>
         {player.name} has {player.score} {checkPoints(player.score)}.
         <button onClick={() => {
           Players.update( player._id, { $inc: { score: 1} } );
         }}>+1</button>
         <button onClick={() => {
           Players.update( player._id, { $inc: { score: -1} } );
         }}>-1</button>
         <button onClick={() => Players.remove(player._id)}>X</button>
       </p>
     );
   });
}

const handleSubmit = event => {
  const playerName = event.target.playerName.value;

  event.preventDefault();

  if (playerName) {
    event.target.playerName.value = '';

    Players.insert({
      name: playerName,
      score: 1
    });
  }

};

Meteor.startup(() => {

  Tracker.autorun(() => {
    const players = Players.find().fetch();

    let title = 'Score Keep';
    let name = 'PEH2'
    let jsx = (
      <div>
        {/* Put new h1 here */}
        <h1>{title}</h1>
        <p>Hello {name}</p>
        <p>Second</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add Player</button>
        </form>
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });

});