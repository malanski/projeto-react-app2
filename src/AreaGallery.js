import React from 'react';
import ListImages from './ListImages';

export default class AreaGallery extends React.Component{
    render(){
        return(
            <div className={"AreaText " + this.props.classSequencia}>
                {this.props.texto}
                <ListImages />

            </div> 
        )
    }
}