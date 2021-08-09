import tableData from '../utils/table-data.json'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_EDIT_MODE = 'SET_EDIT_MODE'
const SET_ACTIVE_MODE = 'SET_ACTIVE_MODE'


let initialState = {
    columns: tableData.columns,
    users: tableData.users.map((i) => ({ ...i, isActive: false, isEdit: false }))
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            {
                let newUsersData = state.users.map((user) => {
                    return user.id === action.data.id ? { ...user, ...action.data, isEdit: !user.isEdit } : { ...user };
                });

                return {
                    ...state,
                    users: newUsersData
                };
            }
        case SET_EDIT_MODE:
            {
                let newUsersData = state.users.map((user) => {
                    return user.id === action.id ? { ...user, isEdit: !user.isEdit } : { ...user };
                });

                return { ...state, users: newUsersData };
            }
        case SET_ACTIVE_MODE:
            {
                let newUsersData = state.users.map((user) => {
                    return user.id === action.id ? { ...user, isActive: !user.isActive } : { ...user };
                });

                return { ...state, users: newUsersData };
            }
        default:
            return state;
    }
};


export const setUserData = (id, name, age, gender, birthday) => ({
    type: SET_USER_DATA, data:
        { id, name, age, gender, birthday }
});

export const setEditMode = (id) => ({
    type: SET_EDIT_MODE, id
});

export const setActive = (id) => ({
    type: SET_ACTIVE_MODE, id
});


export const onSetUserData = (id, name, age, gender, birthday) => (dispatch) => {
    dispatch(setUserData(id, name, age, gender, birthday));
};

export const onSetEditMode = (id) => (dispatch) => {
    dispatch(setEditMode(id));
};

export const onSetActive = (id) => (dispatch) => {
    dispatch(setActive(id));
};

export default friendsReducer;