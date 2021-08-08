
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    username: null,
    error: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};


export const setAuthUserData = (username, error, isAuth) => ({
    type: SET_USER_DATA, data:
        { username, error, isAuth }
});


export const login = (username, password) => (dispatch) => {
    if (username === 'Admin' && password === '12345678') {
        dispatch(setAuthUserData(username, null, true));
    } else {
        dispatch(setAuthUserData(null, 'Имя пользователя или пароль введены неверно', false));
    }
};

export const logout = () => async (dispatch) => {
    dispatch(setAuthUserData(null, null, false));
};

export default authReducer;