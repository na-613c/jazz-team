import Header from './Header';
import { logout } from '../../redux/auth-reducer'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        username: state.auth.username || 'Гость',
        isAuth: state.auth.isAuth
    }
};

const HeaderContainer = connect(mapStateToProps, { logout })(Header);

export default HeaderContainer;

