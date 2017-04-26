import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {

});

const user = {
  name: 'King',
  location: 'LA'
};

const person = {
  ...user,
  age: 25
};

console.log(person); // output -> { age: 25 }