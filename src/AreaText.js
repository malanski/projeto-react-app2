import React from 'react';
import BotaoEstado from './BotaoEstado';

export default class AreaText extends React.Component{
    render(){
        return(
            <div className={"AreaText " + this.props.classSequencia}>
                {this.props.texto}
                <BotaoEstado />
            </div> 
        )
    }
}