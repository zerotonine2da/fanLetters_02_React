import DummyData from '../../fakeData.json';

//초기값
const initialState = [...DummyData];

const Write_Comment = 'WriteComment';

//action Creator
//payload는 WriteComments.jsx의 인자
export const WriteComment = (payload) => {
    console.log('payload', payload);
    return {
        type: Write_Comment,
        payload,
    };
};

const setComment = (state = initialState, action) => {
    switch (action.type) {
        case Write_Comment:
            return [...action.payload];

        default:
            return state;
    }
};

export default setComment;
