import React from 'react';
import { Link as StyledLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import personImg from '../shared/person.png';
import { useDispatch, useSelector } from 'react-redux';

const StSection = styled.section`
    background-color: #8dd2ef;
    min-height: 100px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: auto;
    margin-bottom: 10px;
`;

const StP = styled.p`
    text-overflow: ellipsis; //한문장에서만 가능
    white-space: nowrap; //줄바꿈 방지
    overflow: hidden; //해당 너비 넘으면 숨김표시
    width: 500px;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
`;
const StP2 = styled.p`
    text-overflow: ellipsis; //한문장에서만 가능
    white-space: nowrap; //줄바꿈 방지
    overflow: hidden; //해당 너비 넘으면 숨김표시
    width: 500px;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    margin-left: 60px;
`;

const StP3 = styled.p`
    color: white;
    font-weight: 900;
    margin: auto;
`;

const StImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    padding-top: 5px;
`;

const StDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StLink = styled(StyledLink)`
    display: flex;
    justify-content: center;
    border-color: black;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
    }
`;

function Comments() {
    //const data = useContext(DataContext);

    //데이터 가져오기
    const data = useSelector((state) => state.setComment);
    //console.log('Comment: data: ', data);
    //console.log('Comment: member: ', data[0].member);

    //클릭된 멤버
    const memberData = useSelector((state) => state.selectMember);
    const test = data.map((item) => item.member);
    //console.log('test', test);

    //멤버에 따라 댓글 필터링
    const filteredByMember = data.filter((comment) => comment.member === memberData.member);
    console.log('filteredByMember', filteredByMember);
    /*
    //필터링된 댓글 없으면 '댓글없음 '표시
    if (filteredByMember.length === 0) {
        return (
            <StSection>
                <StP3>{data.clickedMember}의 등록된 팬레터가 없습니다. 댓글을 남겨주세요!</StP3>
            </StSection>
        );
    }
*/
    return (
        <>
            {data.map((comment) => {
                return (
                    <StLink key={comment.id} to={`detail/${comment.id}`}>
                        <StSection>
                            <StDiv>
                                <figure>
                                    <StImg src={personImg} alt="프로필 사진"></StImg>
                                </figure>
                                <StP>{comment.writer}</StP>
                            </StDiv>
                            <div>
                                <StP2>{comment.content}</StP2>
                            </div>
                        </StSection>
                    </StLink>
                );
            })}
        </>
    );
}

export default Comments;
