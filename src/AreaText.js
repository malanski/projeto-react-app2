import React from 'react';

export default class AreaText extends React.Component{
    render(){
        return(
            <div className={"AreaText " + this.props.classSequencia}>{this.props.texto}</div> 
        )
    }
}