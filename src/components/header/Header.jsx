import React from 'react';
import { NavLink, HashRouter } from 'react-router-dom'

import { CALENDAR_R, INFO_R, MAIN_R, PROFILE_R } from '../../utils/consts';
import './Header.css';

const Header = ({ username, isAuth, logout }) => {

    let routes = [
        { route: MAIN_R, name: 'Главная' },
        { route: INFO_R, name: 'Информация' },
        { route: PROFILE_R, name: 'Профиль' },
        { route: CALENDAR_R, name: 'Календарь' },
    ]

    let navlink = routes.map((r, id) => {
        return (
            <NavLink
                to={r.route}
                exact
                activeClassName="header-active"
                key={id}
            >
                {r.name}
            </NavLink>)
    })

    return (
        <div className='header'>

            <HashRouter>
                {navlink}
                {isAuth
                    ? (<div className='header-username' onClick={logout} data-title='Выйти'> {username} </div>)
                    : (<div className='header-username' > {username} </div>)}
            </HashRouter>

        </div>
    );
}

export default React.memo(Header);