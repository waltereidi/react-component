import React, { Component } from 'react';
export default class MySection extends Component {
    state = {
        heading: 'loading...', 
        content:'conteudo'
    }
    render() {
        const { heading, content } = this.state;
        return (
            <main>
                <h2>My Section</h2>
                <h1>{heading}</h1>
                <p>{content}</p>
                {this.props.children}
            </main>
        );
    }
}