import React, { Component } from 'react';
import MeuForm from './MeuForm';
export default class MySection extends Component {
    constructor(props) {
        super(props);

        this.state = {
        heading: 'loading...', 
        content:'conteudo'
        }        
        this.mudarHeading = this.mudarHeading.bind(this);
    }
    mudarHeading() {
        this.setState({
            heading:'botao'
        });
    }

    
    render() {
        const { heading, content } = this.state;
        return (
            <main>
                <button onClick={this.mudarHeading}>btn</button>
                <MeuForm>{heading}</MeuForm>
                <h2>My Section</h2>
                <h1>{heading}</h1>
                <p>{content}</p>
                {this.props.children}
            </main>
        );
    }
}