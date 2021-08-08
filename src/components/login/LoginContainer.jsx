import Login from './Login';
import { login } from '../../redux/auth-reducer'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        isAuth: state.auth.isAuth,
    }
};

const LoginContainer = connect(mapStateToProps, { login })(Login);

export default LoginContainer;

