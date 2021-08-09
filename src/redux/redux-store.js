import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import calendarReducer from "./calendar-reducer";
import friendsReducer from "./friends-reducer";



let reducers = combineReducers({
    auth: authReducer,
    calendar: calendarReducer,
    friends: friendsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;