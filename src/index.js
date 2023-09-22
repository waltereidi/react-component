import React from 'react';
import { render } from 'react-dom';
import MySection from './components/MySection';
import MeuBotao from './components/MeuBotao';
const mysection =render(<MySection>
sdsd
</MySection>, document.getElementById('root'));

setTimeout(() => {
 mysection.setState({
 heading: 'React Awesomesauce',
 content: 'Done!'
 });
}, 3000);