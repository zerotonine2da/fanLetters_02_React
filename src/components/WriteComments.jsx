import React from 'react';
import uuid from 'react-uuid';
import { useState } from 'react';
import styled from 'styled-components';
import { data } from '../shared/data';
import { memberList } from '../shared/MemberList';

const StDivWrite = styled.div`
    background-color: #8dd2ef;
    padding: 10px;
    width: 500px;
    border-radius: 15px;
    margin-bottom: 30px;
`;
const StSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const StSectionEnrolled = styled.section`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    margin-bottom: 10px;
`;
const Stlabel = styled.label`
    width: 70px;
    padding: 10px 15px;
`;
const StInput = styled.input`
    width: 100%;
    border-radius: 10px;
    border: none;
    padding: 10px 15px;
`;

const StTextarea = styled.textarea`
    width: 100%;
    border-radius: 10px;
    border: none;
    height: 80px;
    padding: 10px 15px;
`;

//#e09dd3;
const StSeletbox = styled.select`
    background-color: white;
    padding: 7px;
    border-radius: 0.5em;
    margin: 5px;
`;

const StBtnEnroll = styled.button`
    background-color: #e09dd3;
    padding: 10px;
    border-radius: 0.5em;
    border: none;
    color: white;
    font-weight: 600;
    height: 50px;
`;

function WriteComments({ setComments }) {
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const [selectMember, setSelectMember] = useState('하니');

    return (
        <StDivWrite>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const newComment = {
                        id: uuid(),
                        writer,
                        content,
                        member: selectMember,
                    };
                    //data.push(newComment); //data.js

                    setComments(function (prev) {
                        return [...prev, newComment];
                    });
                }}
            >
                <StSection>
                    <Stlabel>작성자</Stlabel>
                    <StInput
                        value={writer}
                        placeholder="최대 20글자까지 작성할 수 있습니다."
                        maxLength="20"
                        minLength="2"
                        onChange={(event) => {
                            setWriter(event.target.value);
                        }}
                    ></StInput>
                </StSection>
                <StSection>
                    <Stlabel>내용</Stlabel>
                    <StTextarea
                        value={content}
                        placeholder="최대 100자까지 작성할 수 있습니다."
                        maxLength="100"
                        minLength="2"
                        onChange={(event) => {
                            setContent(event.target.value);
                        }}
                    ></StTextarea>
                </StSection>

                <StSectionEnrolled>
                    <StSeletbox
                        onChange={(event) => {
                            setSelectMember(event.target.value);
                        }}
                    >
                        {memberList.map((member) => {
                            return (
                                <option value={member.name} key={member.value}>
                                    {member.name}
                                </option>
                            );
                        })}
                    </StSeletbox>
                    <StBtnEnroll>등록하기</StBtnEnroll>
                </StSectionEnrolled>
            </form>
        </StDivWrite>
    );
}

export default WriteComments;
