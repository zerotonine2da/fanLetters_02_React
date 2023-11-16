import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import personImg from '../shared/person.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const StInput = styled.input`
    width: 500px;
    background-color: white;
    border-radius: 15px;
    padding: 10px 15px;
    margin: 10px;
    border: none;
`;
const StInput2 = styled.input`
    width: 500px;
    background-color: white;
    border-radius: 15px;
    padding: 10px 15px;
    margin-left: 60px;
    border: none;
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

const StTextarea = styled.textarea`
    width: 500px;
    border-radius: 10px;
    border: none;
    height: 80px;
    padding: 10px 15px;
    margin-left: 60px;
`;

function DetailsUpdate({ comments, setComments, setclickedMember }) {
    const navigate = useNavigate();
    const param = useParams();
    const foundData = comments.find((item) => {
        //console.log(item.id === params.id);
        return item.id === param.id;
    });

    const [isEdit, setIsEdit] = useState(false);
    const [editData, setEditData] = useState({ ...foundData });

    //데이터를 변경
    const handleChange = (event, field) => {
        setEditData({ ...editData, [field]: event.target.value });
    };

    //수정완료 시 처리
    const handleUpdate = () => {
        setIsEdit((prev) => !prev);

        //변경된 내용이 없으면 alert 창 보여주기
        if (editData.writer === foundData.writer && editData.content === foundData.content) {
            alert('변경된 내용이 없습니다.');
            return false;
        }

        //isEdit=false-->!isEdit =true(수정완료)
        if (!isEdit) {
            setComments(comments.map((comment) => (comment.id === foundData.id ? editData : comment)));
            //let localData = localStorage.getItem('member');
            //setclickedMember(localData);
            navigate('/');
        }
    };

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
                    <StInput
                        defaultValue={foundData.writer}
                        maxLength="20"
                        minLength="2"
                        onChange={(e) => handleChange(e, 'writer')}
                    ></StInput>
                </StDiv>
                <div>
                    <StTextarea
                        defaultValue={foundData.content}
                        placeholder="최대 100자까지 작성할 수 있습니다."
                        maxLength="100"
                        minLength="2"
                        onChange={(e) => handleChange(e, 'content')}
                    ></StTextarea>
                </div>
                <StDivBtn>
                    <StBtn onClick={handleUpdate}>{isEdit ? '수정' : '수정완료'}</StBtn>
                </StDivBtn>
            </StSection>
        </div>
    );
}

export default DetailsUpdate;
