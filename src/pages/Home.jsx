import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../shared/NewLogo.png';
import newjeanimg from '../shared/newjeanimg.jpg';
import WriteComments from '../components/WriteComments';
import CommentsLayout from '../components/CommentsLayout';
import { DataContext } from '../context/DataContext';

const StLogo = styled.img`
    height: 150px;
    display: flex;
    margin: auto;
`;

const Stimg = styled.img`
    height: 300px;
    display: flex;
    margin: auto;
    padding-bottom: 20px;
`;

function Home() {
    const data = useContext(DataContext);

    return (
        <>
            <header>
                <StLogo src={logo}></StLogo>
                <Stimg src={newjeanimg}></Stimg>
            </header>
            <main>
                <WriteComments />
                <CommentsLayout />
            </main>
            <footer></footer>
        </>
    );
}

export default Home;
