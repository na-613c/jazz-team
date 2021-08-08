import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from "../routes";
import { LOGIN_R, MAIN_R } from "../utils/consts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

const AppRouter = React.memo(({ isAuth}) => {

    return isAuth ?
        (
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={MAIN_R} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact={true} />
                )}
                <Redirect to={LOGIN_R} />
            </Switch>
        )
});

export default connect(mapStateToProps)(AppRouter);