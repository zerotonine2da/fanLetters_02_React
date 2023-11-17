import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Comments from './Comments';
import { setclickedMember } from '../redux/modules/selectMember';

const StDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 600px;
`;

const StBtn = styled.button`
    background-color: ${(props) => props.color};
    color: white;
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-weight: 600;
`;

function CommentsLayout() {
    const memberList = ['하니', '혜인', '다니엘', '해린', '민지'];
    const [Clicked, setClicked] = useState('');

    //데이터 가져오기
    const data = useSelector((state) => state.setComment);
    const memberData = useSelector((state) => state.selectMember);

    const dispatch = useDispatch();

    const btnClick = (event) => {
        setClicked(event.target.value);
        dispatch(setclickedMember(event.target.value));
    };

    //localStorage.setItem('member', clickedMember);
    //setclickedMember(localStorage.getItem('member'));
    return (
        <>
            {' '}
            <StDiv>
                {memberList.map((value) => (
                    <StBtn
                        color={value === Clicked ? '#e09dd3' : '#8dd2ef'}
                        key={value}
                        value={value}
                        onClick={btnClick}
                    >
                        {value}
                    </StBtn>
                ))}
            </StDiv>
            <Comments />
        </>
    );
}

export default CommentsLayout;
