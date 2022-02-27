import React from 'react';
import AreaText from './AreaText';
import Botao from './Botao';

export default class BtnText extends React.Component{
    constructor(){
        super();
        this.state={
            nameBtn: 'Esconder',
            DivClasse: 'show'
        }
    }

    alterState(){
        var Estado;
        var NameBtn;
        if(this.state.DivClasse === 'show'){
            Estado="hide";
            NameBtn='Mostrar';
        } else {
            Estado="show";
            NameBtn='Esconder';
        }
        this.setState({
            nameBtn: NameBtn,
            DivClasse: Estado
        })
    }
    render(){
        return(
            <div>
                <AreaText classSequencia={this.state.DivClasse} texto="Ulisses Developer" />
                <Botao funcao={this.alterState.bind(this)} valor={this.state.nameBtn} />
            </div>
        )
    }
}