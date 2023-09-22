import React, { Component } from 'react'; 

export default class MeuForm extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            
            <p>{ this.props.children}</p>
    );
}

}