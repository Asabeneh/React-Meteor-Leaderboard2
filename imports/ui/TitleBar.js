import React from 'react';

export default class TitleBar extends React.Component{
  rendereSubtitle(){
    if(this.props.subtitle){
      return <h2 className = "title-bar__subtitle"> {this.props.subtitle}</h2>;
  }
  }
  render(){
    return(
    <div className = "title-bar">
      <div className = "wrapper">
       <h1>{this.props.title}</h1>
      {this.rendereSubtitle()}
      </div>
    </div>
    )
  }

}
TitleBar.propTypes = {
title:React.PropTypes.string.isRequired,
subtitle:React.PropTypes.string
};
