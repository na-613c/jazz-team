
const SET_EVENT = 'SET_EVENT'
const UPD_EVENT = 'UPD_EVENT'



let initialState = {
    events: [
        { dateTime: '22.08.2021, 00:00:00', title: 'ДР!', name: "Дима Молодцов", uId: 1 },
        { dateTime: '09.08.2021, 00:00:00', title: 'Встреча', name: "Витя Костин, Петр Михайлов", uId: 2 }
    ]
};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENT:
            const uId = Math.max(state.events.map((event) => event.uid)) + 1 || 0;

            return {
                events: [
                    ...state.events,
                    { ...action.event, uId }
                ],
            };
        case UPD_EVENT:
            const newEvents = state.events.map((event) => {
                if (event.uId === action.event.uId) {
                    return { ...action.event }
                } else {
                    return { ...event }
                }
            })

            return {
                events: [...newEvents],
            };
        default:
            return state;
    }
};


export const setEvent = (dateTime, title, name) => ({
    type: SET_EVENT, event:
        { dateTime, title, name }
});

export const addEvent = (dateTime, title, name) => (dispatch) => {
    dispatch(setEvent(dateTime, title, name));
};

export const updEventInfo = (dateTime, title, name, uId) => ({
    type: UPD_EVENT, event:
        { dateTime, title, name, uId }
});

export const updEvent = (dateTime, title, name, uId) => (dispatch) => {
    dispatch(updEventInfo(dateTime, title, name, uId));
};

export default calendarReducer;