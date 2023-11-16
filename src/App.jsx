import './App.css';
import Router from './shared/Router';
import GlobalStyle from './shared/GlobalStyle';
import DummyData from './fakeData.json';
import { useState } from 'react';
import { DataContext } from './context/DataContext';

function App() {
    const [comments, setComments] = useState(DummyData);
    const [clickedMember, setclickedMember] = useState('하니');

    return (
        <DataContext.Provider value={{ comments, setComments, clickedMember, setclickedMember }}>
            <GlobalStyle />
            <Router></Router>
        </DataContext.Provider>
    );
}

export default App;
