import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import personImg from '../shared/person.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

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
`;

const StP = styled.p`
    width: 500px;
    background-color: white;
    border-radius: 15px;
    padding: 10px 15px;
    margin: 10px;
`;
const StP2 = styled.p`
    width: 500px;
    background-color: white;
    border-radius: 15px;
    padding: 10px 15px;
    margin-left: 60px;
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

const StBtn = styled.button`
    background-color: #e09dd3;
    color: white;
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    font-weight: 600;
`;

const StDivBtn = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function Details() {
    const data = useContext(DataContext);
    const navigate = useNavigate();
    const params = useParams();

    const foundData = data.comments.find((item) => {
        //console.log(item.id === params.id);
        return item.id === params.id;
    });

    return (
        <div>
            <div>
                <Link to={`/`}>
                    <StBtn>홈으로</StBtn>
                </Link>
            </div>

            <StSection key={foundData.id}>
                <StDiv>
                    <figure>
                        <StImg src={personImg} alt="프로필 사진"></StImg>
                    </figure>
                    <StP>{foundData.writer}</StP>
                </StDiv>
                <div>
                    <StP2>{foundData.content}</StP2>
                </div>

                <StDivBtn>
                    <StBtn
                        onClick={(event) => {
                            navigate('/update/' + foundData.id);
                        }}
                    >
                        수정
                    </StBtn>
                    <StBtn
                        onClick={(event) => {
                            if (window.confirm('삭제하시겠습니까?')) {
                                //삭제기능
                                const deleted = data.comments.filter((comment) => comment.id !== foundData.id);
                                data.setComments(deleted);
                                alert('삭제되었습니다.');
                                navigate('/');
                            } else {
                                return false;
                            }
                        }}
                    >
                        삭제
                    </StBtn>
                </StDivBtn>
            </StSection>
        </div>
    );
}

export default Details;
