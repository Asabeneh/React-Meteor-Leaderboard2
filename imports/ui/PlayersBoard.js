import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class PlayersBoard extends React.Component{
  render(){
    return(
    <div>
       <TitleBar title = {this.props.title} subtitle = "Created by Asabeneh"/>
      <div className = "wrapper">
        <PlayerList players = {this.props.players}/>
         <AddPlayer/>
      </div>
    </div>
    )
  }
}
PlayersBoard.propTypes = {
title:React.PropTypes.string.isRequired,
players:React.PropTypes.array.isRequired,

}
