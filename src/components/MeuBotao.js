import React, { Component } from 'react'; 

export default class MeuBotao extends Component{
    state = {
            desativado: false
    };
  
    render() {
        const { desativado } = this.state;
        return <button disabled={desativado} >{ this.props.children}</button>
    }
}
