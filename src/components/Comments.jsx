import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import personImg from '../shared/person.png';

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
    width: 400px;
    background-color: white;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
`;
const StP2 = styled.p`
    text-overflow: ellipsis; //한문장에서만 가능
    white-space: nowrap; //줄바꿈 방지
    overflow: hidden; //해당 너비 넘으면 숨김표시
    width: 400px;
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

function Comments({ comments, member }) {
    //멤버에 따라 댓글 필터링
    const filteredByMember = comments.filter((comment) => comment.member === member);

    //필터링된 댓글 없으면 '댓글없음 '표시
    if (filteredByMember.length === 0) {
        return (
            <StSection>
                <StP3>{member}의 등록된 팬레터가 없습니다. 댓글을 남겨주세요!</StP3>
            </StSection>
        );
    }

    return (
        <>
            {filteredByMember.map((comment) => {
                return (
                    <StSection key={comment.id}>
                        <Link to={`detail/${comment.id}`}>{comment.member}</Link>
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
                );
            })}
        </>
    );
}

export default Comments;
