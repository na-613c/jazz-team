import React, { useRef } from 'react';
import { PROFILE_R } from '../../utils/consts';
import { Redirect } from 'react-router-dom'
import './Login.css';

const Login = ({ error, isAuth, login }) => {

    const inputUsername = useRef(null);
    const inputPassword = useRef(null);

    const onLoginClick = () => {
        const username = inputUsername.current.value.trim();
        const password = inputPassword.current.value.trim();

        login(username, password);
    };

    const redirect = (isAuth)&& <Redirect to={PROFILE_R} />;

    return (
        <div className='login'>
            {redirect}
            <div className='form'>
                <h1>Login</h1>
                <div className="form-input-material">
                    <input type="text" ref={inputUsername} placeholder="Логин" autoComplete="off" className="form-control-material" />
                </div>
                <div className="form-input-material">
                    <input type="password" ref={inputPassword} placeholder="Пароль" autoComplete="off" className="form-control-material" />
                </div>
                <span className="error">{error ? error : <><br /><br /></>}</span>
                <div className="btn btn-ghost" onClick={onLoginClick}>Войти</div>
            </div>
        </div>
    );
}

export default React.memo(Login);