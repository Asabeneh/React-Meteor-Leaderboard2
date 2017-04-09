import React from 'react';
import  {Players} from './../api/players';

export default class Player extends React.Component{
render(){
  let itemClassName = `item item--position-${this.props.player.rank}`;
  return(

  <div key = {this.props.player._id} className = {itemClassName}>
    <div className = "player">
    <div className="player__stats">
      <h3 className = "player__name"> {this.props.player.name}</h3>
      <p className = "player__stats">
       {this.props.player.position} place - {this.props.player.score} points
      </p>
      <span>{this.props.player.createdAt}</span>
    </div>

    <div className = "player__actions">

      <button className = "button button__round add__button" onClick = {()=>Players.update({_id:this.props.player._id},{$inc:{score:1}})}>+
      <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
      </button>
      <button className = "button button__round minus__button" onClick = {()=>Players.update({_id:this.props.player._id},{$inc:{score:-1}})}>
      -<i className="fa fa-minus fa-2x" aria-hidden="true"></i></button>
      <button className = "button button__round delete__button" onClick = {()=>Players.remove({_id:this.props.player._id})}>
    x  <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i></button>
    </div>

    </div>
  </div>
  
  );
}
}

Player.propTypes = {
player:React.PropTypes.object.isRequired,

}
