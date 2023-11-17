import './App.css';
import Router from './shared/Router';
import GlobalStyle from './shared/GlobalStyle';
import DummyData from './fakeData.json';
import { useState } from 'react';

function App() {
    const [comments, setComments] = useState(DummyData);
    const [clickedMember, setclickedMember] = useState('하니');

    return (
        <>
            {' '}
            <GlobalStyle />
            <Router></Router>
        </>
    );
}

export default App;
