//초기값
const initialState = { member: '하니' };

const memeberChange = 'change';

export const setclickedMember = (payload) => {
    return {
        type: memeberChange,
        payload,
    };
};

const selectMember = (state = initialState, action) => {
    switch (action.type) {
        case memeberChange:
            return {
                member: action.payload,
            };

        default:
            return state;
    }
};

export default selectMember;
