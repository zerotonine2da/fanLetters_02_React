import React from 'react';
import uuid from 'react-uuid';
import WriteComments from '../components/WriteComments';

import GlobalStyle from '../shared/GlobalStyle';
import newjeanimg from '../shared/newjeanimg.jpg';
import styled from 'styled-components';
import CommentsLayout from '../components/CommentsLayout';

const Stimg = styled.img`
    height: 300px;
    display: flex;
    margin: auto;
    padding: 20px;
`;

function Home({ comments, setComments, writer, setWriter, content, setContent }) {
    return (
        <>
            <header>
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
