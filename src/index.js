import React from 'react';
import { render } from 'react-dom';
import MySection from './components/MySection';
import MeuBotao from './components/MeuBotao';
var botao = 'text';
const mysection = render(<MySection>
    {botao}
    <MeuBotao></MeuBotao>
</MySection>, document.getElementById('root'));

setTimeout(() => {
 mysection.setState({
 heading: 'React Awesomesauce',
 content: 'Done!'
 });
    botao = 'sdsds';
}, 3000);
