import { MAIN_R, LOGIN_R, PROFILE_R, INFO_R, CALENDAR_R } from './utils/consts'
import Main from "./components/main/Main";
import LoginContainer from './components/login/LoginContainer';
import Info from './components/info/Info';
import ProfileContainer from './components/profile/ProfileContainer';
import CalendarContainer from './components/calendar/CalendarContainer';


export const publicRoutes = [
    {
        path: MAIN_R,
        Component: Main
    },
    {
        path: LOGIN_R,
        Component: LoginContainer
    }, {
        path: INFO_R,
        Component: Info
    },]

export const privateRoutes = [
    {
        path: MAIN_R,
        Component: Main
    }, {
        path: INFO_R,
        Component: Info
    }, {
        path: PROFILE_R,
        Component: ProfileContainer
    },
    {
        path: LOGIN_R,
        Component: LoginContainer
    },
    {
        path: CALENDAR_R,
        Component: CalendarContainer
    },
]