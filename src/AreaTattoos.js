import React from 'react';
import ListTattoos from './ListTattoos';

export default class AreaTattoos extends React.Component{
    render(){
        return(
            <div className={"AreaText " + this.props.classSequencia}>
                {this.props.texto}
                <ListTattoos />
            </div> 
        )
    }
}