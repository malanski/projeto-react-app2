import React from 'react';
import AreaTattoos from './AreaTattoos';
import Botao from './Botao';

export default class BtnTattoos extends React.Component{
    constructor(){
        super();
        this.state={
            nameBtn: 'Esconder Tattoos',
            DivClasse: 'show'
        }
    }

    alterState(){
        var Estado;
        var NameBtn;
        if(this.state.DivClasse === 'show'){
            Estado="hide";
            NameBtn='Mostrar Tattoos';
        } else {
            Estado="show";
            NameBtn='Esconder Tattoos';
        }
        this.setState({
            nameBtn: NameBtn,
            DivClasse: Estado
        })
    }
    render(){
        return(
            <div>
                <Botao funcao={this.alterState.bind(this)} valor={this.state.nameBtn} />

                <AreaTattoos classSequencia={this.state.DivClasse} texto="Ulisses Tattoo Art" />
            </div>
        )
    }
}