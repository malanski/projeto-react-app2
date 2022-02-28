import React from 'react';
import AreaGallery from './AreaGallery';
import Botao from './Botao';

export default class BtnGallery extends React.Component{
    constructor(){
        super();
        this.state={
            nameBtn: 'Esconder Galeria',
            DivClasse: 'show'
        }
    }

    alterState(){
        var Estado;
        var NameBtn;
        if(this.state.DivClasse === 'show'){
            Estado="hide";
            NameBtn='Mostrar Galeria';
        } else {
            Estado="show";
            NameBtn='Esconder Galeria';
        }
        this.setState({
            nameBtn: NameBtn,
            DivClasse: Estado
        })
    }
    render(){
        return(
            <div>
                <AreaGallery classSequencia={this.state.DivClasse} texto="Ulisses Developer" />
                <Botao funcao={this.alterState.bind(this)} valor={this.state.nameBtn} />
            </div>
        )
    }
}