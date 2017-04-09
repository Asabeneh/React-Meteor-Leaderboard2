import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players ,calculatorPlayerPositions}from './../imports/api/players';
import PlayersBoard from './../imports/ui/PlayersBoard';

Meteor.startup(()=>{
  Tracker.autorun(()=>{
    let players = Players.find({},{sort:{score:-1,name:1}}).fetch();
    let positionedPlayers = calculatorPlayerPositions(players)
    let title = "React Meteor Web Application";

    ReactDOM.render(
  <PlayersBoard title ={title}  players = {positionedPlayers}/>, document.getElementById('app')
  );
  });
})
