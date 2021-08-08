import Profile from './Profile';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
    }
};

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;

