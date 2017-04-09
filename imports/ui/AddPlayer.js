import React from 'react';
import {Players} from './../api/players';
import moment from 'moment';

export default class AddPlayer extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    let playerName = e.target.playerName.value;
    let playerValue = e.target.playerValue.value;
    if(playerName){
      e.target.playerName.value = "";
      e.target.playerValue.value = "";

      Players.insert({
        name:playerName,
        score:Number(playerValue),
        createdAt:moment().format('DD/MM/YYYY h:mm a')
      });
    }
  }
  render(){
    return(
      <div className = "item">
        <form  className = "form" onSubmit = {this.handleSubmit.bind(this)}>
          <input className = "form__input" type = "text" name = "playerName" placeholder = "Player name"/>
          <input type ="text" className = "form__input form__score" name = "playerValue" size = "5" placeholder="Value" />
          <button className = "button"> Add Player</button>
        </form>
      </div>
    )
    }
}
