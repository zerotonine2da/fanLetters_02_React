import DummyData from '../../fakeData.json';

//초기값
const initialState = [...DummyData];

const Write_Comment = 'WriteComment';
const Update_Comment = 'UPdateComment';
const Delete_Comment = 'DeleteComment';

//action Creator
//payload는 WriteComments.jsx의 인자
export const WriteComment = (payload) => {
    return {
        type: Write_Comment,
        payload,
    };
};

//action Creator
//payload는 DetailsUpdate.jsx의 인자
export const UpdateComment = (payload) => {
    console.log('payload', payload);
    return {
        type: Update_Comment,
        payload,
    };
};

//action Creator
//payload는 Details.jsx의 인자
export const DeleteComment = (payload) => {
    console.log('payload', payload);
    return {
        type: Delete_Comment,
        payload,
    };
};

const setComment = (state = initialState, action) => {
    switch (action.type) {
        case Write_Comment: //new
            return [...state, action.payload];

        case Update_Comment:
            return [...action.payload];

        case Delete_Comment:
            return [...action.payload];

        default:
            return state;
    }
};

export default setComment;
