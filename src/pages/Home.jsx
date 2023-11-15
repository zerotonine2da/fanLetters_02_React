import React from 'react';

import WriteComments from '../components/WriteComments';

import GlobalStyle from '../shared/GlobalStyle';
import newjeanimg from '../shared/newjeanimg.jpg';
import styled from 'styled-components';
import CommentsLayout from '../components/CommentsLayout';
import logo from '../shared/NewLogo.png';
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

function Home({ comments, setComments, writer, setWriter, content, setContent }) {
    return (
        <>
            <header>
                <StLogo src={logo}></StLogo>
                <Stimg src={newjeanimg}></Stimg>
            </header>
            <main>
                <GlobalStyle />
                <WriteComments setComments={setComments} />
                <CommentsLayout comments={comments} setComments={setComments} member={'하니'} />
            </main>
            <footer></footer>
        </>
    );
}

export default Home;
